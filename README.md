# feedback-app

## Node + React: Fullstack Web Development

### Application & Flow

Application for startups to request feedback from their customers. Features:

- users sign up via Google OAuth
- user pays for email credits via stripe
- dashboard for startup owners
- user creates a new 'campaign'
- input list of emails to send the survey to
- send emails to the list of surveyees
- get tabulation of results and see report of all survey responses

### Back-End: [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/), [PassportJS](http://www.passportjs.org/), [MongoDB](https://www.mongodb.com/), [MongooseJS](https://mongoosejs.com/)

### Check Front-End inside '/client/'

1. Enhanced authentication flows with [Google OAuth authentication](https://developers.google.com/identity/protocols/OAuth2)

2. Communicate data from MongoDB to the [React application](https://github.com/Robert-OP/feedback-app/tree/master/client)

3. Handle credit cards and receive payments from users with [Stripe](https://stripe.com/)

4. Effectively create and send emails from the back-end server with [SendGrid](https://sendgrid.com/)

5. Receive feedback from SendGrid when user clicks/opens the email by using a webhook
