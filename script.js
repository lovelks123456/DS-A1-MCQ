const quizQuestions = [
    {
        question: "What is a data point in a dataset?",
        opt1: "A single unit of data",
        opt2: "An attribute of the data",
        opt3: "A summary of the data",
        opt4: "A visualization of the data",
        correct: "opt1",
    },
    {
        question: "Which of the following is an example of a feature in a dataset of students' scores",
        opt1: "The average score",
        opt2: "The student's name",
        opt3: "The total number of students",
        opt4: "The highest score",
        correct: "opt2",
    },
	{
        question: "What is a feature in a dataset?",
        opt1: "A single unit of data",
        opt2: "An attribute or property of the data",
        opt3: "A summary of the data",
        opt4: "A visualization of the data",
        correct: "opt2",
    },
	{
        question: "Which of the following is NOT a feature in a dataset of employees?",
        opt1: "Employee ID",
        opt2: "Salary",
        opt3: "Department",
        opt4: "Total number of employees",
        correct: "opt4",
    },
	{
        question: "What is the primary purpose of features in a dataset?",
        opt1: "To visualize the data",
        opt2: "To describe the attributes of the data points",
        opt3: "To summarize the data",
        opt4: "To delete unnecessary data",
        correct: "opt2",
    },
	{
        question: "What does the COUNT function do in a spreadsheet?",
        opt1: "Counts the number of cells with text",
        opt2: "Counts the number of cells with numbers",
        opt3: "Counts the number of empty cells",
        opt4: "Counts the number of cells with formulas",
        correct: "opt2",
    },
	{
        question: "Which of the following formulas will count the number of cells in the range A1:A10 that contain numbers greater than 50?",
        opt1: "=COUNT(A1:A10)",
        opt2: "=COUNTIF(A1:A10, >50)",
        opt3: "=COUNTIF(A1:A10, <50)",
        opt4: "=COUNT(A1:A10, >50)",
        correct: "opt2",
    },
	{
        question: "What is the result of the formula =COUNTIF(B1:B10, >=100) if the range B1:B10 contains the numbers 90, 100, 110, 120, 130, 140, 150, 160, 170, 180?",
        opt1: "5",
        opt2: "6",
        opt3: "7",
        opt4: "8",
        correct: "opt4",
    },
	{
        question: "Which function would you use to count the number of cells in a range that meet a specific condition?",
        opt1: "COUNT",
        opt2: "COUNTIF",
        opt3: "Sum",
        opt4: "Average",
        correct: "opt2",
    },
	{
        question: "Which of the following is a type of dataset used in AI and data science?",
        opt1: "Structured data",
        opt2: "Unstructured data",
        opt3: "Semi-structured data",
        opt4: "All of the above",
        correct: "opt4",
    },
	{
        question: "What tool was introduced for data exploration in the video?",
        opt1: "Excel",
        opt2: "Orange",
        opt3: "R",
        opt4: "Python",
        correct: "opt2",
    },
	{
        question: "Which of the following is NOT a paradigm of learning in AI/ML?",
        opt1: "Supervised Learning",
        opt2: "Unsupervised Learning",
        opt3: "Reinforcement Learning",
        opt4: "Manual Learning",
        correct: "opt4",
    },
	{
        question: "What is the primary goal of supervised learning?",
        opt1: "To find patterns in data without labels",
        opt2: "To learn from labeled data Manual calculations",
        opt3: "To interact with an environment and learn from feedback",
        opt4: "To manually adjust the model parameters",
        correct: "opt2",
    },
	{
        question: "Which of the following is an example of a real-world application of AI/ML?",
        opt1: "Image recognition",
        opt2: "Data entry",
        opt3: "Manual calculations",
        opt4: "Filing paperwork",
        correct: "opt1",
    },
	{
        question: "What was the main focus of the School Connect live session on Data Science and AI?",
        opt1: "Coding in Python",
        opt2: "Data collection, handling, and visualization using Google Sheets",
        opt3: "Designing websites",
        opt4: "Cloud computing",
        correct: "opt2",
    },
	{
        question: "What tools were used during the session to engage participants?",
        opt1: "Google Sheets and Menti",
        opt2: "Excel and PowerPoint",
        opt3: "Python and R",
        opt4: "SQL",
        correct: "opt1",
    },
	{
        question: "What was the primary goal of the School Connect session?",
        opt1: "To teach advanced programming",
        opt2: "To engage students  in understanding real-life applications of data science",
        opt3: "To create interactive websites",
        opt4: "To develop mobile apps",
        correct: "opt2",
    },
	{
        question: "How was data science defined in the session?",
        opt1: "As a field involving software development",
        opt2: "As a field that involves collecting, analyzing, and interpreting data to extract meaningful insights",
        opt3: "As a branch of physics",
        opt4: "As a type of graphic design",
        correct: "opt2",
    },
	{
        question: "What example was given to explain data collection methods?",
        opt1: "Conducting surveys on public opinion",
        opt2: "Gathering factors influencing housing choice",
        opt3: "Collecting climate data",
        opt4: "Recording daily expenses",
        correct: "opt2",
    },
	{
        question: "Which factors were considered in the example of data collection for housing choice?",
        opt1: "Rent price, number of rooms, location, and amenities",
        opt2: "Color of the house, garden size, and neighbors",
        opt3: "Distance to schools, public transport, and parking availability",
        opt4: "Historical significance, building age, and architecture",
        correct: "opt1",
    },
	{
        question: "Why was data visualization emphasized during the session?",
        opt1: "To make data visually appealing",
        opt2: "To create posters",
        opt3: "To make data easier to interpret and analyze",
        opt4: "To decorate the classroom",
        correct: "opt3",
    },
	{
        question: "What was the role of practice assignments according to the facilitator?",
        opt1: "To earn grades",
        opt2: "To reinforce learning",
        opt3: "To prepare for exams",
        opt4: "To create art projects",
        correct: "opt2",
    },
	{
        question: "What does the term 'data handling' refer to, as taught in the session?",
        opt1: "Managing and processing data using tools like Google Sheets",
        opt2: "Physical storage of data files",
        opt3: "Securely locking away data",
        opt4: "Manual counting of data",
        correct: "opt1",
    },
	{
        question: "What function to use if we have to find the frequency of occurance of a value in a dataset",
        opt1: "Average",
        opt2: "Median",
        opt3: "Mode",
        opt4: "Mean",
        correct: "opt3",
    },
	{
        question: "What is the correct way to calculate Average from a range of values in google sheets",
        opt1: "Average(Start range: End Range)",
        opt2: "=Average(Start Range: End Range)",
        opt3: "=Average(Srart range: End range)",
        opt4: "None of the above",
        correct: "opt2",
    },
];

// DOM elements
const questionNumberElement = document.getElementById("question-number");
const questionTextElement = document.getElementById("question-txt");
const option1Element = document.getElementById("option1");
const option2Element = document.getElementById("option2");
const option3Element = document.getElementById("option3");
const option4Element = document.getElementById("option4");
const nextButton = document.getElementById("next-button");
const startQuizButton = document.getElementById("start-quiz");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
const totalQuestions = quizQuestions.length;

// Function to show the quiz section
function startQuiz() {
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    if (!name || !roll) {
        alert("Please enter your name and roll number to start the quiz.");
        return;
    }

    // Store user info
    localStorage.setItem("name", name);
    localStorage.setItem("roll", roll);

    // Hide user info and show quiz section
    document.getElementById("user-info").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";

    // Display the first question
    showQuestion();
}

// Function to display a question
function showQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        goToResultPage();
        return;
    }

    // Reset the timer
    resetTimer();

    // Get current question
    const question = quizQuestions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    questionTextElement.textContent = question.question;
    option1Element.textContent = question.opt1;
    option2Element.textContent = question.opt2;
    option3Element.textContent = question.opt3;
    option4Element.textContent = question.opt4;

    // Clear previous selections
    document.querySelectorAll("input[name='opt']").forEach(input => (input.checked = false));
}

// Timer reset function
function resetTimer() {
    clearInterval(timerInterval);
    let timeLeft = 30;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleNextQuestion();
        }
    }, 1000);
}

// Handle Next button click
function handleNextQuestion() {
    const selectedOption = document.querySelector("input[name='opt']:checked");
    const correctOption = quizQuestions[currentQuestionIndex].correct;

    if (selectedOption) {
        userAnswers.push(selectedOption.id);
        if (selectedOption.id === correctOption) {
            score++;
        }
    } else {
        userAnswers.push(null); // No selection
    }

    currentQuestionIndex++;
    showQuestion();
}

// Go to the result page
function goToResultPage() {
    clearInterval(timerInterval);

    // Store results in localStorage
    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", totalQuestions);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("quizData", JSON.stringify(quizQuestions));

    // Redirect to result page
    window.location.href = "resultpage.html";
}

// Event listeners
startQuizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNextQuestion);
