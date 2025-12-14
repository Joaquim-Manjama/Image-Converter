import COLOR from "../attributes/Colors"

interface BenefitProp {
    label: string,
    icon: string
}


const Benefit = ({ label, icon}: BenefitProp) => {

    return <div className="bg-[#111111] w-[25%] border-2 border-gray-800 flex flex-col items-center justify-center rounded-lg text-sm p-10 font-bold text-center">
        <span className={`material-symbols-outlined text-${COLOR.blue} scale-120 mb-[7px]`}>{icon}</span>
        <p className="text-gray-400">{label}</p>
    </div>
}

export default Benefit;