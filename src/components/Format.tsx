import COLOR from "../attributes/Colors"

interface FormatProp {
    type: string,
    description: string,
    active: boolean
}

const Format = ({ type, description, active}: FormatProp) => {
    return <div className={`bg-${active ? "[#222233]": "[#111111]"} w-[171px] ${active ? `border-3 border-${COLOR.blue}` : "border-2 border-gray-800"} flex flex-col justify-center rounded-lg p-[10px] font-bold select-none relative hover:${!active && "bg-[#222222]"}`}>
        <span className={`text-${COLOR.blue} text-left font-bold text-lg`}>{type}</span>
        {active && <span className={`text-${COLOR.blue} scale-200 absolute ml-[145px] mb-[70px]`}>.</span>}
        <p className="text-gray-400 text-sm font-normal">{description}</p>
    </div>
}

export default Format;