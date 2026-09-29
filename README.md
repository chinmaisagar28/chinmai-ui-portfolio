# Portfolio Project

This is a modern web application built for a portfolio. It is created using **Next.js** (a powerful React framework), **Tailwind CSS** (for styling), and **Shadcn UI** (for beautiful pre-built components).

## Getting Started

Follow these step-by-step instructions to run the project on your local machine.

### Prerequisites

Since you have the code ready, you will just need the environment to run it. You will need to install **Node.js**:
- Download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/) (Choose the LTS version).
- Node.js comes with `npm` (Node Package Manager), which is used to install all the dependencies required for this project.

### Step 1: Install Dependencies

Before you can run the project, you need to download all the necessary tools and libraries it uses.

1. Open your terminal in the IDE (or any command prompt) and make sure you are in the project folder: `f:\Chinmai Projects\Web Development\portfolio`
2. Run the following command:
   ```bash
   npm install
   ```
   *This command will read the `package.json` file and install everything your project needs into a folder called `node_modules`.*

### Step 2: Run the Development Server

Once the installation is complete, you can start the project.

1. In the same terminal, run:
   ```bash
   npm run dev
   ```
2. Wait a few seconds for the server to start. It will show a message like `ready - started server on 0.0.0.0:3000, url: http://localhost:3000`.
3. Open your web browser (Chrome, Edge, Safari, etc.) and go to:
   **[http://localhost:3000](http://localhost:3000)**

You should now see your portfolio running live! Any changes you make to the code in the `src` folder will automatically refresh the browser.

### Cleaning Up Unnecessary Files

Originally, this project included files for **Prisma** and a database structure (`db` folder). 
Since this is a simple portfolio website, a complex backend database is usually not required. 
- I have **deleted** the `prisma` folder, the `db` folder, and the unused `db.ts` setup file. 
- I also cleaned up the `package.json` to remove the database packages, ensuring your project is lightweight.
- **Why it is safe to delete:** I performed a thorough check of the entire codebase and confirmed that these database components were never actually used or imported in any of your active React components or pages. Removing them will have **no negative impact** on your portfolio, and it will make the project run faster and easier to manage!
