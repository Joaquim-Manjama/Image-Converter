interface FormatProp {
    key: number
    type: string,
    description: string,
    active: boolean
}

const Format = ({ key, type, description, active}: FormatProp) => {
    return <div key={key} className={`bg-${active ? "[#1e6b63]": "[#111111]"} w-[171px] ${active ? "border-3 border-[#3dd6c6]" : "border-2 border-gray-800"} flex flex-col justify-center rounded-lg p-[10px] font-bold select-none relative`}>
        <span className="text-[#3dd6c6] text-left font-bold text-lg">{type}</span>
        {active && <span className="text-[#3dd6c6] scale-200 absolute ml-[145px] mb-[70px]">.</span>}
        <p className="text-gray-400 text-sm font-normal">{description}</p>
    </div>
}

export default Format;