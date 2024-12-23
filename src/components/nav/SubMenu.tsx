import { SubLink } from "@/types";

const SubMenu = (section: SubLink) => {
  //   console.log(section.label);
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-black">{section.label}</h3>
      <ul className="space-y-2">
        <li key={section.label}>
          <a
            href={section.href}
            className="block text-sm text-zinc-400 transition-colors hover:text-black"
          >
            {section.label}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
