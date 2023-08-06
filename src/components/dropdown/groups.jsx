import Select from 'react-select';
import api from '../../constants/api';

function DropdownGroups(){

    const content = [];
    api.getGroups().then((data) => {
      for (let key in data) {
        content.push({value: key,
                      label: data[key]});
  
      }
    })

    return (
       <div>
            <Select options={content}/>
       </div> 
    )
}

export default DropdownGroups