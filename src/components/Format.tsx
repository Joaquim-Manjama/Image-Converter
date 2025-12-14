interface FormatProp {
    type: string,
    description: string,
    active: boolean
}

const Format = ({ type, description, active}: FormatProp) => {
    return <div className={`bg-${active ? "[#1a2025]": "[#0d1117]"} w-[171px] border-3  ${active ? `border-[#3dd6c6]` : "border-[#2a3441]"} flex flex-col justify-center rounded-lg p-[10px] font-bold select-none relative transition-all duration-300 hover:${!active && "bg-[#1a2025]"}`}>
        <span className="text-[#3dd6c6] text-left font-bold text-lg">{type}</span>
        {active && <span className="text-[#3dd6c6] scale-200 absolute ml-[145px] mb-[70px]">.</span>}
        <p className="text-gray-400 text-sm font-normal">{description}</p>
    </div>
}

export default Format;