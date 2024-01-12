import React, {ReactElement, useState, useEffect} from 'react'


type SkillProps = {
  IconComponent: ReactElement;
  className?: string;
  index: number;
  widthClass?: string;
}

const Skill: React.FC<SkillProps> = ({IconComponent, index, widthClass}) => {
  console.log(widthClass)
   const [even, setEven] = useState(false)
   const [className, setClassName] = useState('')

   useEffect(() => {
    const baseClass = 'rounded-md bg-slate-100 p-1 origin-center cursor-pointer transition-all drop-shadow-md';
    if(index % 2 == 0) {
      setEven(true);
      setClassName(`${baseClass} hover:rotate-12`)
    } else {
      setEven(false)
      setClassName(`${baseClass} hover:-rotate-12`)
    }
   })

  return (
    <div className={`${className} ${widthClass}`}>
      {IconComponent}
    </div>
  )
}

export default Skill;