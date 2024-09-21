import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa6";

export default function InsertTaskArea() {
    return (
      <form className="insertTaskArea">
        <div className="textArea">
            <label htmlFor="addTask">Adicionar Tarefa</label>
            <input type="text" id="addTask" placeholder="Digite sua tarefa aqui..."/>
        </div>
        <div className="radioArea">
            <label htmlFor="addPriority-low">Baixa <FaArrowDown />
            </label>
            <input type="radio" id="addPriority-low" name="priority"/>

            <label htmlFor="addPriority-medium">Media <FaArrowRight/>
            </label>
            <input type="radio" id="addPriority-medium" name="priority"/>

            <label htmlFor="addPriority-high">Alta <FaArrowUp />
            </label>
            <input type="radio" id="addPriority-high" name="priority"/>
        </div>
        <button type="submit" className="btnAdicionar">Enviar</button>
      </form>
    )
}