

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className=" mx-auto md:w-4/12 py-20 text-center cursor-pointer">
            <p className="text-xl text-yellow-400 p-3" >--- {heading} ---</p>
            <h3 className="text-4xl text-black font-bold border-y-2  py-3" >{subHeading}</h3>
            
        </div>
    );
};

export default SectionTitle;