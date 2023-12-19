import RestrauntItems from "./RestrauntItems";

const RestrauntCategory = ({data, showItems, setShowIndex}) => {
    const toggleAccordion = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 "  >
                <div className="flex justify-between cursor-pointer" onClick={toggleAccordion}>
                <span className="font-bold text-lg">{data.name} ({data.type.length})</span>

                <span>a</span>

                </div>
               {showItems && <RestrauntItems items={data.type}/> }

            </div>

        </div>
    )
}
export default RestrauntCategory;