import s from './style.module.css';
import CurrentDateTime from "../../components/data/getData";

function MainPage() { 
    return (
        <>
            <header className={s.header}>
                <div className={s.title}>
                    <h1>МАДИ</h1>
                    <p>Кафедра “Автоматизированные системы управления”</p>
                </div>
                <CurrentDateTime/>
            </header>
            <div className={s.cards}>
                <p>Расписание по группам</p>
                <p>Расписание экзаменов</p>
                <p>Расписание преподавателей кафедры АСУ</p>
                <p>Список свободных кабинетов</p>
            </div>    
        </>
    )
}
export default MainPage;