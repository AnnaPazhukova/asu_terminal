import {Table as AntTable} from 'antd';
import api from '../../constants/api';
import DropdownGroups from '../../components/dropdown/groups';
import DropdownDay from '../../components/dropdown/data';


let content = []

await api.getGroupSchedule(8702)
    .then((data) => {
        content = data['schedule']['Понедельник'];
    })

    
const dataLessons = content?.map(day => ({
    time: day.time,
    name: day.name,
    type: day.type,
    auditorium: day.auditorium,
    teaher: day.teaher,
}))


export const PageGroups = () => {

    const columns = [
        {
            title: 'time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'auditorium',
            dataIndex: 'auditorium',
            key: 'auditorium',
        },
        {
            title: 'teaher',
            dataIndex: 'teaher',
            key: 'teaher',
        },

    ];
    return (
        <>
            <DropdownGroups/>
            <DropdownDay/>
            <AntTable dataSource={dataLessons} columns={columns}/>

        </>
    )
}

export default PageGroups;
