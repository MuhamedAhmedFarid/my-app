const SelectOption = ({ title }: any) => {
    return (
        <div className="relative inline-block w-full mr-3">
            <select 
                id="countries" 
                className="block appearance-none w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-xl ml-4 pr-10"
                defaultValue={title} // Use defaultValue to set the default selected value
            >
                <option className="m-auto text-blue-200" value={title}>{title}</option> {/* Use value prop instead of selected */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
            </div>
        </div>
    );
};

export default SelectOption;