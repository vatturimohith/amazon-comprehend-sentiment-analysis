// ========================================
// AWS LAMBDA FUNCTION URL
// ========================================

// Replace this with your actual Lambda Function URL.

const API_URL =
    "PASTE_YOUR_LAMBDA_FUNCTION_URL_HERE";


// ========================================
// ANALYZE SENTIMENT
// ========================================

async function analyzeSentiment() {

    const feedback =
        document.getElementById("feedback").value.trim();

    const button =
        document.getElementById("analyzeBtn");

    const loading =
        document.getElementById("loading");

    const error =
        document.getElementById("error");

    const result =
        document.getElementById("result");


    // Clear previous messages

    error.textContent = "";

    result.classList.add("hidden");


    // Check feedback

    if (!feedback) {

        error.textContent =
            "Please enter customer feedback.";

        return;
    }


    // Check Lambda URL

    if (API_URL.includes("PASTE_YOUR")) {

        error.textContent =
            "Please add your Lambda Function URL in script.js.";

        return;
    }


    // Disable button

    button.disabled = true;

    loading.classList.remove("hidden");


    try {

        // Send request to AWS Lambda

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                feedback: feedback

            })

        });


        // Convert response to JSON

        const data = await response.json();


        // Check for error

        if (!response.ok) {

            throw new Error(
                data.error || "Request failed."
            );

        }


        // Display sentiment

        document.getElementById("sentiment")
            .textContent = data.sentiment;


        // Display scores

        setScore(
            "positive",
            data.scores.positive
        );

        setScore(
            "negative",
            data.scores.negative
        );

        setScore(
            "neutral",
            data.scores.neutral
        );

        setScore(
            "mixed",
            data.scores.mixed
        );


        // Show result

        result.classList.remove("hidden");


    } catch (err) {

        error.textContent =
            "Error: " + err.message;

    } finally {

        button.disabled = false;

        loading.classList.add("hidden");

    }

}


// ========================================
// DISPLAY SCORE
// ========================================

function setScore(name, value) {

    const number = Number(value || 0);


    // Percentage text

    document.getElementById(
        name + "Text"
    ).textContent =
        number.toFixed(2) + "%";


    // Progress bar

    document.getElementById(
        name + "Bar"
    ).style.width =
        number + "%";

}
