import MainMenu from "../../MenuItems/MainMenu/MainMenu";


const NavBar = () => {
    return (
        <>
            <div className="bg-black w-full h-[15%]">
                <div className="text-white p-2">
                    <MainMenu></MainMenu>
                </div>
            </div>
        </>
    );
};

export default NavBar;