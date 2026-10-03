# Amazon Comprehend Sentiment Analysis on Customer Feedback

## Project Description

This project uses **Amazon Comprehend** to analyze customer feedback and identify the sentiment as:

- Positive
- Negative
- Neutral
- Mixed

The user enters customer feedback through a web application. The feedback is sent to AWS Lambda, which uses Amazon Comprehend to perform sentiment analysis. The result is then displayed on the webpage.

---

## Objective

The main objective of this project is to develop a simple cloud-based application that can automatically analyze customer feedback and identify customer sentiment.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Python
- AWS Lambda
- Amazon Comprehend
- Amazon S3
- AWS IAM
- Lambda Function URL

---

## Architecture

```text
Customer
   |
   v
Web Frontend
HTML / CSS / JavaScript
   |
   v
Lambda Function URL
   |
   v
AWS Lambda
   |
   v
Amazon Comprehend
   |
   v
Sentiment Result
   |
   v
Web Frontend
