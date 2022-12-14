function Skill({ title, icons }) {
    return (
            <div className="flex flex-col justify-around align-center">
                <h1 className="text-white text-2xl text-center m-4">{ title }</h1>
                <div className="flex flex-row justify-evenly">
                    { icons }
                </div>
            </div>
    );
}

export default Skill;