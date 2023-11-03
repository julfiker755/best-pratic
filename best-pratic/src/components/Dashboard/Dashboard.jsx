import React from 'react';
import { AiOutlineMenu} from 'react-icons/ai';

const Dashboard = () => {
    return (
   <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col lg:pt-5 lg:pl-5">
    {/* Navber responsive start */}
    <div className='flex pb-5 lg:hidden'>
    <div className='w-[calc(100vw-40px)] h-9 bg-[#0000ffaa]'></div>
    <label htmlFor="my-drawer-2" className="lg:hidden cursor-pointer bg-[green] w-10 h-9 flex justify-center items-center"><AiOutlineMenu/>
    </label>
    </div>
    {/* Navber responsive end */}
    {/* content here */}
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci nulla reiciendis, autem quod temporibus quas dolorem saepe culpa, facere voluptatum veritatis tenetur voluptates? Ratione quo mollitia eos vitae quasi quis voluptatum facere expedita veniam fuga iste laboriosam, debitis porro perspiciatis eum explicabo dolores repudiandae tempore? Dolorem unde facere repellendus culpa quasi repudiandae commodi ex voluptatum sed quod. Reiciendis voluptatibus nihil qui aspernatur aut officiis debitis laboriosam esse, assumenda sapiente iusto dolorem eius magnam dolores. Sed, cumque, adipisci molestiae ducimus ab et maiores iste soluta vitae maxime placeat veritatis magnam at assumenda delectus consectetur asperiores similique ex! Omnis asperiores inventore, nemo, consectetur quo amet porro harum nobis accusamus pariatur quod eveniet ad ipsa veniam cupiditate ex ut eius tenetur rem autem nesciunt et cum corporis aperiam! Minima in accusantium recusandae distinctio facilis libero, quod, molestiae expedita aut, sunt exercitationem perspiciatis nam non iusto est odio eum rerum dolor ullam. Officia, atque sequi iusto culpa cumque sapiente quasi voluptate, recusandae provident similique veniam, earum tenetur. Amet asperiores assumenda voluptatum ipsa aperiam eum reiciendis ullam delectus deleniti exercitationem quo perspiciatis autem sapiente debitis expedita alias, reprehenderit veritatis error odio voluptatibus odit. Cum veniam quis quidem excepturi ab eos, optio laboriosam asperiores ipsa corrupti tempore dolorem modi aliquam eligendi incidunt reiciendis ex animi molestias similique ullam dolore eum sed! Itaque aspernatur voluptatum nihil autem tenetur minus hic. Dicta expedita fuga veritatis quod distinctio officia, aliquid ad ex facilis nesciunt debitis officiis aperiam tempore esse perspiciatis commodi velit aliquam laboriosam ut. Illo sit minus, quidem ad ullam maxime delectus explicabo similique nemo libero, ipsa, quisquam est alias molestiae quasi! Facere non illo sapiente porro culpa quasi distinctio reprehenderit, nulla incidunt. Exercitationem fugit quidem autem, omnis fugiat, quia sint asperiores nostrum vel, vitae iste quae voluptas eos quisquam corporis! Vel inventore suscipit tempora necessitatibus corrupti ea, quisquam fugit error fugiat iste, obcaecati alias doloribus voluptas. Ex temporibus debitis amet quasi, deserunt assumenda nulla enim praesentium perspiciatis incidunt voluptates autem provident beatae facere voluptas, iusto commodi mollitia aperiam facilis labore aspernatur excepturi minima odio saepe. Voluptatem eligendi nam eius nulla. Distinctio, nisi omnis dolor inventore amet quasi voluptatem reprehenderit blanditiis optio, magnam quia doloremque repellendus ut quos minima culpa officiis commodi officia voluptatibus alias. Nobis tempora nemo error deleniti vel iusto, fuga pariatur ipsum officiis odit numquam aut voluptatum eaque, doloremque quibusdam obcaecati porro eveniet veritatis magni reiciendis qui. Eveniet incidunt minus error quibusdam odio sed.
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 3</a></li>
      <li><a>Sidebar Item 4</a></li>
      <li><a>Sidebar Item 5</a></li>
      <li><a>Sidebar Item 6</a></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;