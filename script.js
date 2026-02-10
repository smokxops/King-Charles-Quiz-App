// King Charles Quiz App Logic
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 30; // 30 seconds for the quiz
        this.timerInterval = null;
        this.difficulty = 'intermediate'; // default difficulty
        this.userAnswers = [];
        this.questionStartTime = 0;
        this.totalTimeTaken = 0;

        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        this.reviewScreen = document.getElementById('reviewScreen');

        // Quiz elements
        this.questionElement = document.getElementById('question');
        this.questionNumElement = document.getElementById('questionNum');
        this.answersContainer = document.getElementById('answersContainer');
        this.timerElement = document.getElementById('timer');
        this.timerBar = document.getElementById('timerBar');
        this.scoreElement = document.getElementById('score');
        this.progressBar = document.getElementById('progressBar');
        this.currentQuestionElement = document.getElementById('currentQuestion');
        this.totalQuestionsElement = document.getElementById('totalQuestions');
        this.nextBtn = document.getElementById('nextBtn');

        // Results elements
        this.finalScoreElement = document.getElementById('finalScore');
        this.correctAnswersElement = document.getElementById('correctAnswers');
        this.wrongAnswersElement = document.getElementById('wrongAnswers');
        this.accuracyElement = document.getElementById('accuracyRate');
        this.avgTimeElement = document.getElementById('avgTime');
        this.verdictElement = document.getElementById('verdict');
        this.messageElement = document.getElementById('message');
    }

    attachEventListeners() {
        // Start button
        document.getElementById('startBtn').addEventListener('click', () => this.startQuiz());

        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.difficulty = e.target.dataset.difficulty;
            });
        });

        // Next button
        this.nextBtn.addEventListener('click', () => this.nextQuestion());

        // Retry button
        document.getElementById('retryBtn').addEventListener('click', () => this.resetQuiz());

        // Review button
        document.getElementById('reviewBtn').addEventListener('click', () => this.showReview());

        // Close review
        document.getElementById('closeReview').addEventListener('click', () => this.closeReview());
    }

    startQuiz() {
        // Filter questions based on difficulty
        this.questions = this.filterQuestionsByDifficulty();
        
        // Shuffle questions
        this.questions = this.shuffleArray(this.questions);

        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.totalTimeTaken = 0;

        // Update UI
        this.totalQuestionsElement.textContent = this.questions.length;
        this.updateScore();

        // Show quiz screen
        this.showScreen(this.quizScreen);
        this.loadQuestion();
    }

    filterQuestionsByDifficulty() {
        if (this.difficulty === 'easy') {
            return quizQuestions.filter(q => q.difficulty === 'easy');
        } else if (this.difficulty === 'medium') {
            return quizQuestions.filter(q => q.difficulty === 'easy' || q.difficulty === 'medium');
        } else {
            return [...quizQuestions]; // All questions for hard mode
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endQuiz();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        
        // Update question display
        this.questionElement.textContent = question.question;
        this.questionNumElement.textContent = this.currentQuestionIndex + 1;
        this.currentQuestionElement.textContent = this.currentQuestionIndex + 1;

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = progress + '%';

        // Clear previous answers
        this.answersContainer.innerHTML = '';

        // Load answer options
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            optionElement.innerHTML = `<span>${option}</span>`;
            optionElement.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(optionElement);
        });

        // Hide next button
        this.nextBtn.classList.add('hidden');

        // Start timer
        this.questionStartTime = Date.now();
        this.startTimer();
    }

    startTimer() {
        this.timeLeft = 30;
        this.timerElement.textContent = this.timeLeft;
        this.timerBar.style.width = '100%';

        clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.timerElement.textContent = this.timeLeft;
            this.timerBar.style.width = (this.timeLeft / 30 * 100) + '%';

            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.selectAnswer(null); // Auto-submit with no answer
            }
        }, 1000);
    }

    selectAnswer(selectedIndex) {
        clearInterval(this.timerInterval);

        const timeTaken = Math.floor((Date.now() - this.questionStartTime) / 1000);
        this.totalTimeTaken += timeTaken;

        const question = this.questions[this.currentQuestionIndex];
        const correctIndex = question.correct;
        const isCorrect = selectedIndex === correctIndex;

        // Calculate score based on speed and correctness
        if (isCorrect) {
            const timeBonus = Math.max(0, this.timeLeft * 10); // Bonus for speed
            const basePoints = 100;
            this.score += basePoints + timeBonus;
        }

        // Save user answer
        this.userAnswers.push({
            questionId: question.id,
            question: question.question,
            options: question.options,
            userAnswer: selectedIndex,
            correctAnswer: correctIndex,
            isCorrect: isCorrect,
            timeTaken: timeTaken
        });

        // Update UI
        this.updateScore();

        // Highlight answers
        const options = this.answersContainer.querySelectorAll('.answer-option');
        options.forEach((option, index) => {
            option.classList.add('disabled');
            
            if (index === correctIndex) {
                option.classList.add('correct');
            }
            
            if (selectedIndex !== null && index === selectedIndex && !isCorrect) {
                option.classList.add('wrong');
            }
        });

        // Show next button
        this.nextBtn.classList.remove('hidden');
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    updateScore() {
        this.scoreElement.textContent = String(this.score).padStart(4, '0');
    }

    endQuiz() {
        clearInterval(this.timerInterval);

        // Calculate stats
        const totalQuestions = this.questions.length;
        const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
        const wrongAnswers = totalQuestions - correctAnswers;
        const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
        const avgTime = Math.round(this.totalTimeTaken / totalQuestions);

        // Update results display
        this.finalScoreElement.textContent = String(this.score).padStart(4, '0');
        this.correctAnswersElement.textContent = correctAnswers;
        this.wrongAnswersElement.textContent = wrongAnswers;
        this.accuracyElement.textContent = accuracy + '%';
        this.avgTimeElement.textContent = avgTime + 's';

        // Generate verdict
        this.generateVerdict(accuracy, this.score);

        // Show results screen
        this.showScreen(this.resultsScreen);
    }

    generateVerdict(accuracy, score) {
        let verdict = '';
        let message = '';

        if (accuracy >= 90 && score >= 4000) {
            verdict = 'JAVASCRIPT MASTER';
            message = 'Outstanding performance! You have proven your mastery of JavaScript. Your knowledge is exceptional and your speed is remarkable.';
        } else if (accuracy >= 80 && score >= 3000) {
            verdict = 'EXPERT DEVELOPER';
            message = 'Excellent work! You have a strong grasp of JavaScript concepts. Continue practicing to reach master level.';
        } else if (accuracy >= 70 && score >= 2000) {
            verdict = 'PROFICIENT CODER';
            message = 'Good job! You understand JavaScript fundamentals well. Keep learning to strengthen your expertise.';
        } else if (accuracy >= 60) {
            verdict = 'COMPETENT BEGINNER';
            message = 'Not bad! You have a basic understanding of JavaScript. More practice will help you improve significantly.';
        } else if (accuracy >= 50) {
            verdict = 'NOVICE LEARNER';
            message = 'You are on the right path, but there is much to learn. Study the fundamentals and try again.';
        } else {
            verdict = 'NEEDS IMPROVEMENT';
            message = 'Do not give up! JavaScript takes time to master. Review the basics and challenge yourself again.';
        }

        this.verdictElement.textContent = verdict;
        this.messageElement.textContent = message;
    }

    showReview() {
        const reviewContent = document.getElementById('reviewContent');
        reviewContent.innerHTML = '';

        this.userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.isCorrect ? 'correct-answer' : 'wrong-answer'}`;
            
            let optionsHtml = '';
            answer.options.forEach((option, optIndex) => {
                let optionClass = 'review-option';
                
                if (optIndex === answer.userAnswer) {
                    optionClass += ' user-answer';
                }
                
                if (optIndex === answer.correctAnswer) {
                    optionClass += ' correct-answer-option';
                }
                
                optionsHtml += `<div class="${optionClass}">${option}</div>`;
            });

            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${answer.question}
                </div>
                <div class="review-options">${optionsHtml}</div>
                <div class="review-result">
                    ${answer.isCorrect ? '✓ CORRECT' : '✗ INCORRECT'} | Time: ${answer.timeTaken}s
                </div>
            `;
            
            reviewContent.appendChild(reviewItem);
        });

        this.showScreen(this.reviewScreen);
    }

    closeReview() {
        this.showScreen(this.resultsScreen);
    }

    resetQuiz() {
        this.showScreen(this.startScreen);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.totalTimeTaken = 0;
        clearInterval(this.timerInterval);
    }

    showScreen(screen) {
        [this.startScreen, this.quizScreen, this.resultsScreen, this.reviewScreen].forEach(s => {
            s.classList.remove('active');
        });
        screen.classList.add('active');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});