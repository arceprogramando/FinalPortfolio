import { useEffect, useState } from "react";

const Time = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    const startDate = new Date('August 8, 2022');
    const currentDate = new Date();

    const timeDiff = currentDate - startDate;

    const yearsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const monthsPassed = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));

    setYears(yearsPassed);
    setMonths(monthsPassed);
  }, []);

  return (
    <div className=" max-w-lg  ">
      <p>Mi carrera en el mundo del desarrollo web comenzó hace {years} {years === 1 ? 'año' : 'años'} y {months} {months === 1 ? 'mes' : 'meses'} .
        Desde ese momento trate de crear un habito de aprendizaje  y mejora constante que voy a seguir reforzando con el tiempo y la practica</p>
    </div>
  );
};

export default Time;
