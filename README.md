[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7610273&assignment_repo_type=AssignmentRepo)

# React TypeScript Starter Repo

Hello! This repository has been pre-configured with eslint and gh-pages to automatically deploy your app when you push to the main branch.

You will, however, need to finish setting up the deployment.

### 1. Generate a personal access token

1. Click on your picture -> `settings` in the top right of Github.
2. Then, scroll to `Developer Settings` and click `Personal access tokens`
3. Generate a new token with `repo` access and no expiration date.
4. Make sure you copy the created token as you will not be able to see it after this.

### 2. Add a secret to the forked repo

Back in this repository, go to `settings` -> `secrets` -> `Actions` and click the `New repository secret` button in the topright.

Name the secret "GH_TOKEN" and paste in the token you copied in the previous step.

Tasks:
Students can access the published site publicly through their browser
Students can see a table that shows a single semester of courses
Students can see a table that shows multiples semesters of courses
Students can see a list of all the degrees plans that they have made
So a degree plan is a collection of semesters, and a semester is a collection of courses
Students can edit the course code, course title, and credits of a course in the plan
Students can clear out all the existing courses in a semester
Students can clear out all the existing semesters in a plan
Students can insert or remove a plan
Students can insert or remove a semester to their plan
Students can insert or remove a course in a semester
Students can skip semesters
"I am not taking any classes in the Fall 2021 semester, but I am taking classes in Winter 2022 and Summer 2021"
Students can save their current degree plan and load plans between working sessions
Students are introduced to the application with a friendly message that clearly explains their goal and how they should get started
Students can visualize the unfilled requirements of their degree plan
Students can establish that a course fulfills a degree requirement
"CISC220 is a required course for all degrees"
"The degree must have at least 3 technical electives
Students can establish that a course meets another course's prerequisite
"CISC108 serves as a prereq for CISC210"
Students can move courses from one semester to another semester, or to a free-standing "pool of courses" to use later
Students can override course's info, but also reset a course back to its default information
"CISC367 (the experimental course number) could be set to 'Introduction to Data Science' and fulfill a Technical Elective"
Students can export their plans as CSV files, suitable for sharing with advisers
Students can import their plans from CSV files, even after small modifications have been made
