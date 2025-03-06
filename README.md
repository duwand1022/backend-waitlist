# Waitlist API with Express and Resend

This project provides a server-side API for handling waitlist submissions using Express and Resend. It allows users to join a waitlist by submitting their details, which are then added to a Resend audience.

---

## Features

- **Waitlist Submission:** Users can submit their details (first name, last name, and email) to join the waitlist.
- **Resend Integration:** Submissions are added to a Resend audience for email marketing purposes.
- **CORS Support:** The API supports Cross-Origin Resource Sharing (CORS) for all origins.
- **Error Handling:** Proper error handling for missing fields or failed submissions.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Setup

1. **Clone the Repository:**

```
git clone https://github.com/your-repo/waitlist-api.git
cd waitlist-api
```

2. **Install Dependencies:**

```
npm install
```

3. **Set Up Environment Variables:**

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
```

> **Note:** The `apiKey` and `audienceId` are passed from the frontend, so they are not required in the `.env` file.

4. **Run the Server:**

```
node server.js
```

The server will start running on `http://localhost:5000`.

---

## API Endpoint

### **POST /api/waitlist**

Adds a user to the waitlist and integrates with Resend.

#### Request Body

```
| Field        | Type   | Required | Description              |
|--------------|--------|----------|--------------------------|
| `apiKey`     | string | Yes      | Your Resend API key.     |
| `audienceId` | string | Yes      | The Resend audience ID.  |
| `firstName`  | string | Yes      | The user's first name.   |
| `lastName`   | string | No       | The user's last name.    |
| `email`      | string | Yes      | The user's email address.|
```

#### Example Request

```
{
"apiKey": "your_resend_api_key",
"audienceId": "your_audience_id",
"firstName": "John",
"lastName": "Doe",
"email": "john.doe@example.com"
}
```

#### Example Response

**Success (200):**

```
{
"message": "Successfully joined the waitlist!"
}
```

**Error (400):**

```
{
"message": "Missing required fields"
}
```

**Error (500):**

```
{
"message": "Failed to join the waitlist. Please try again."
}
```

---
