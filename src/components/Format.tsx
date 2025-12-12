interface FormatProp {
    key: number
    type: string | boolean,
    description: string | boolean,
    active: string | boolean
}

const Format = ({ key, type, description, active}: FormatProp) => {
    return <div key={key} className={`bg-${active ? "[#1e6b63]": "[#111111]"} w-[171px] border-${active ? "3 border-[#3dd6c6]" : "2 border-gray-800"} flex flex-col justify-center rounded-lg p-[10px] font-bold`}>
        <span className="text-[#3dd6c6] text-left font-bold text-lg">{type}</span>
        <p className="text-gray-400 text-sm font-normal">{description}</p>
    </div>
}

export default Format;