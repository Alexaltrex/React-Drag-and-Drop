import React from "react";
import style from "./Home.module.scss"

export const Home = () => {
    return (
        <div className={style.home}>
            <h1>React DnD</h1>
            <p className={style.step}>
                <span>React Dnd</span>
                {
                    `
                     использует внутри Redux, его концепции напоминают flux и redux: 
                     источник истины - данные, а не представление.
                    `
                }
            </p>

            <p className={style.step}>
                <span>Item / элемент - </span>
                {
                    `
                     js-объект, описывающий то, что перетаскивается { fromCell: "C5", piece: "queen" }.
                    `
                }
            </p>

            <p className={style.step}>
                <span>Type / тип - </span>
                {
                    `
                     строка (символ), однозначно идентифицирующий класс элеиентов item 
                     (в приложении может быть несколько типов перетаскиваемых элементов).
                     Типы позволяют указывать совместимость источников и целей перетаскивания.
                    `
                }
            </p>

            <p className={style.step}>
                <span>Monitor / Монитор - </span>
                {
                    `
                     обертка внутреннего состояния компонента, которая позволяет обновлять его пропсы 
                     при изменении состояния DnD, которое хранится в мониторе.
                    `
                }
            </p>

            <p className={style.step}>
                <span>Collecting function - </span>
                {
                    `
                     извлекает соответствующую информацию из монитора, определяется для компонента, 
                     который должен отслеживать состояние Dnd. React Dnd вызывает collecting function и 
                     сливает результаты её выполнения с пропсами компонента.
                    `
                }
            </p>

            <div className={style.step}>
                <span>Connectors - </span>
                {
                    `
                     используются для прослушивания бэкендом событий узлов DOM. 
                     Connectors позволяют назначить узлу DOM одну из трех возможный ролей:                      
                    `
                }
                <ul>
                    <li>source / источник перетаскивания</li>
                    <li>preview - компонент, изображаемый при перетаскивании</li>
                    <li>target / цель перетаскивания</li>
                </ul>
            </div>

            <div className={style.step}>
                <span>Source / источник - </span>
                {
                    `
                     оборачивает компонент, чтобы сделать его перетаскиваемым                      
                    `
                }
                <ul>
                    <li>регестрируется для одного type</li>
                    <li>реализует метод, создающий item из пропсов компонента</li>
                    <li>опционально, методы обработки событий DnD</li>
                    <li>опционально, collecting function</li>
                </ul>
            </div>

            <div className={style.step}>
                <span>Target / цель - </span>
                {
                    `
                     оборачивает компонент, чтобы сделать его целью перетаскивания. 
                     Сходен с source, отличия:                      
                    `
                }
                <ul>
                    <li>может быть рарегестрирован для нескольких type</li>
                    <li>вместо метода создания item, методы наведения и отпускания</li>
                </ul>
            </div>

        </div>
    )
}
