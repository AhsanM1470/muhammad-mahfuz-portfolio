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
            <b>Kangaroo Taskaroo</b> is an online task manager developed by me and a group of other students, collectively known as Team Kangaroo!
          </div>
          <div className="text-container">
            Developed in <b id="key-bold">Django</b> using <b id="key-bold">HTML, CSS, JavaScript,</b> and <b id="key-bold">Python</b>.
          </div>
          <div className="text-container">
            The website is live (with seeded data) so why not <a href="https://kangarootaskaroo.pythonanywhere.com/" id="sentence-link">check it out for yourself</a>?
          </div>
          <img src={homePage} className="project-pic" alt="Homess" />
        </div>
      </section>

      <section id="project-info">
        <h1 className="title section-header">Further Details</h1>
        <div className="project-details-container">
          <div>
            Users can either create their own teams or be invited by other users. Each team has a dashboard where they can create tasks and move them between lanes, representing the project workflow.
          </div>
        <div className="project-pic-container">
          <img src={dashBoard}  className="project-pic" alt="Dashboard" />
          <img src={createTeam} className="project-pic-side" alt="Create team" />
          <img src={inviteMember} className="project-pic-side" alt="Invite member" />
        </div>

        <div className="text-container">
          Tasks include a due date and time, any other tasks it is dependent on for completion, and the users that have been assigned to complete it.<br />
          For ease of use tasks can also be filtered/searched.
        </div>
        <img src={searchTasks} id="search-task"  alt="Search task"/>
        <div className="project-pic-container">
          <img src={taskInfo} className="project-pic-medium" alt="Task info" />
          <img src={createTask} className="project-pic-side" alt="Create task" />
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
