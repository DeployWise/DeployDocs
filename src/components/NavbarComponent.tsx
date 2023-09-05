import { AiOutlineStar } from "react-icons/ai";
import {IoMenuOutline} from 'react-icons/io5'
import { FiGithub } from "react-icons/fi";

const NavBarComponent = (): JSX.Element => {
  return (
    <nav className="p-4 h-16 flex items-center justify-between border-b-[0.5px] border-b-gray-500">
      <section className="p-2 font-extrabold text-white text-xl hover:bg-zinc-800 hover:bg-opacity-40 rounded hover:rounded-lg">
        <a href="/">DeployDocs</a>
      </section>
      <section className="sm:hidden flex items-center gap-4">
        <a
          target="__blank"
          href="https://github.com/Deploywise/DeployDocs"
          className="flex flex-auto items-center gap-2 p-2 text-md hover:bg-zinc-800 hover:text-white hover:p-2 hover:rounded-lg font-medium text-slate-300"
        >
          <AiOutlineStar className='text-2xl' />
          Star us on GitHub
        </a>
        <IoMenuOutline  className="text-slate-200 text-2xl md:visible lg:hidden"  />
      </section>
      <section className="hidden sm:flex items-center gap-4">
        <a
          target="__blank"
          href="https://github.com/Deploywise/DeployDocs"
          className="text-slate-200 text-2xl" 
        >
          
          <FiGithub/>
        </a>
        <IoMenuOutline  className="text-slate-200 text-2xl"  />
      </section>
    </nav>
  );
};

export default NavBarComponent;
