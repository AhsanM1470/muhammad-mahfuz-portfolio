import React from 'react';
import '../App.css';
import '../MediaQueries.css';
import homePage from '../assets/kangaroo-taskaroo/home.png';
import dashBoard from '../assets/kangaroo-taskaroo/dashboard.png';
import createTeam from '../assets/kangaroo-taskaroo/create-team.png';
import inviteMember from '../assets/kangaroo-taskaroo/invite-member.png';
import searchTasks from '../assets/kangaroo-taskaroo/search-tasks.png';
import taskInfo from '../assets/kangaroo-taskaroo/task-info.png';
import createTask from '../assets/kangaroo-taskaroo/create-task.png';

function KangarooTaskarooProject() {
  return(
    <div>
      <section id="project-purpose">
        <h1 className="title">Project Purpose</h1>
        <div className="project-details-container">
          <div className="text-container">
            <b>Kangaroo Taskaroo</b> is an online task manager developed by me and a group of other students, collectively known as Team Kangaroo!<br />
            Developed in <b>Django</b> using <b>HTML, CSS, JavaScript,</b> and <b>Python</b>.
          </div>
          <p>The website is live (with seeded data) so why not <a href="https://kangarootaskaroo.pythonanywhere.com/">check it out for yourself?</a></p>
          <p>Alternatively, you can find the source code <a href="https://github.com/AhsanM1470/kangaroo-taskaroo">here.</a></p>
          <img src={homePage} className="project-pic"/>
        </div>
      </section>

      <section id="project-info">
        <h1 className="title section-header">Further Details</h1>
        <div className="project-details-container">
          <div>
            Users can either create their own teams or be invited by other users. Each team has a dashboard where they can create tasks and move them between lanes, representing the project workflow.
          </div>
        <div className="project-pic-container">
          <img src={dashBoard}  className="project-pic"/>
          <img src={createTeam} className="project-pic-side"/>
          <img src={inviteMember} className="project-pic-side"/>
        </div>

        <div className="text-container">
          Tasks include a due date and time, any other tasks it is dependent on for completion, and the users that have been assigned to complete it.<br />
          For ease of use tasks can also be filtered/searched.
        </div>
        <img src={searchTasks} id="search-task" />
        <div className="project-pic-container">
          <img src={taskInfo} className="project-pic-medium"/>
          <img src={createTask} className="project-pic-side"/>
        </div>

          <div className="text-container">
            Any task assignments, approaching deadlines, or team invitations will be displayed in the user's notifications tab.
          </div>
        </div>
      </section>
    </div>
  );
}

export default KangarooTaskarooProject;
