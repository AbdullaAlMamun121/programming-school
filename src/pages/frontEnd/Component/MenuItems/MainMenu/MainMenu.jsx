const mainMenu = [
  {
    id: 1,
    menu: "HTML",
  },
  {
    id: 2,
    menu: "CSS",
  },
  {
    id: 3,
    menu: "Bootstrap",
  },
  {
    id: 4,
    menu: "Tailwind",
  },
  {
    id: 5,
    menu: "Javascript",
  },
  {
    id: 6,
    menu: "ReactJs",
  },
  {
    id: 7,
    menu: "NodeJs",
  },
  {
    id: 8,
    menu: "ExpressJs",
  },
  {
    id: 9,
    menu: "Mongodb",
  },
];

const MainMenu = () => {
  return (
    <ul className="relative gap-4 items-center text-base  flex text-white">
      {mainMenu.map((item) => (
        <li className="hover:bg-slate-500 hover:h-15" key={item.id}>{item.menu}</li>
      ))}
    </ul>
  );
};

export default MainMenu;
