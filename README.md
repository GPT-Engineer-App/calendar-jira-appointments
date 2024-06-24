# calendar-jira-appointments

an app that displays in a web page my calendar (based on outlook) and the JIRA tickets that are assign to me. I want to be able to drag and drop the JIRA tickets to the calendar and it should create a new appointment from based on the story points. Assume 1 story point is 30 minutes of work. If the task is longer than 2 hours, break the JIRA ticket into multiple appointments so that the longest duration is 2 hours, and suffix the appointments with - PART 1, 2 etc.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/calendar-jira-appointments.git
cd calendar-jira-appointments
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
