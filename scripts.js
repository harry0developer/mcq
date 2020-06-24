    answers = {
        answer1: ['Cats', 'Dogs'],

        answer2: 'true',

        answer3: ['Africa', 'Europe'],

    };

    shortQuestionsAnswers = {
        question1: ''
    }


    function resetForm() {
        document.querySelector('#quizForm').reset();
        var answer1 = document.querySelector('.answer1');
        var answer2 = document.querySelector('.answer2');
        var answer3 = document.querySelector('.answer3');
        answer1.innerHTML = '';
        answer2.innerHTML = '';
        answer3.innerHTML = '';
    }

    function resetShortQuestionAnswer(id) {
        var clearAnswer = document.querySelector(`.${id}`);
        if (clearAnswer) {
            clearAnswer.className = `${id} hide`;
        }
    }

    function showShortQuestionsAnswer(id) {
        var answer = document.querySelector(`.${id}`);
        if (answer) {
            answer.className = `${id} show`;
        }
    }

    function onSubmit() {

        //=============================================================
        //Question 1
        var question1 = document.querySelectorAll('[name=q1]:checked');
        var answer1 = document.querySelector('.answer1');
        answer1.innerHTML = '';
        var a1 = [];

        var p = document.createElement('p');
        if (question1) {
            question1.forEach(function(a) {
                a1.push(a.value);
            });

            p.innerText = 'ANSWER: Cats, Dogs';
            if (JSON.stringify(a1) === JSON.stringify(answers.answer1)) {
                p.className = 'correct';
                answer1.appendChild(p);
            } else {
                p.className = 'incorrect';
                answer1.appendChild(p);
            }
        } else {
            p.className = 'incorrect';
            answer1.appendChild(p);
        }



        //=============================================================
        //Question 2
        var question2 = document.querySelector('[name=q2]:checked');
        var answer2 = document.querySelector('.answer2');
        answer2.innerHTML = '';
        var p = document.createElement('p');
        p.innerText = 'ANSWER: Cows eat grass';

        if (question2 && question2.value == answers.answer2) {
            p.className = 'correct';
            answer2.appendChild(p);
        } else {
            p.className = 'incorrect';
            answer2.appendChild(p);
        }

        //=============================================================
        //Question 3

        var question3 = document.querySelectorAll('[name=q3]:checked');
        var answer3 = document.querySelector('.answer3');
        answer3.innerHTML = '';
        var a3 = [];

        question3.forEach(function(a) {
            a3.push(a.value);
        });

        var p = document.createElement('p');
        p.innerText = 'ANSWER: Africa, Europe';
        if (JSON.stringify(a3) === JSON.stringify(answers.answer3)) {
            p.className = 'correct';
            answer3.appendChild(p);
        } else {
            p.className = 'incorrect';
            answer3.appendChild(p);
        }

    }