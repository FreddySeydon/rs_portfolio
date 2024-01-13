import React, {ReactElement, useState, useEffect, cloneElement} from 'react'


type SkillProps = {
  IconComponent: ReactElement;
  className?: string;
  index: number;
  widthClass?: string;
  fill?: string;
}

const Skill: React.FC<SkillProps> = ({IconComponent, index, widthClass, fill}) => {
   const [isEven, setIsEven] = useState(false)
   const [className, setClassName] = useState('')

   useEffect(() => {
    const baseClass = 'rounded-md bg-slate-100 p-1 origin-center cursor-pointer transition-all drop-shadow-md';
    if(index % 2 == 0) {
      setIsEven(true);
      setClassName(`${baseClass} hover:rotate-12`)
    } else {
      setIsEven(false)
      setClassName(`${baseClass} hover:-rotate-12`)
    }
   }, [index])

   const iconWithFill = cloneElement(IconComponent, { fill: isEven ? fill : "rgb(47, 72, 88)" })

  return (
    <div className={`${className} ${widthClass}`}>
      {iconWithFill}
    </div>
  )
}

export default Skill;