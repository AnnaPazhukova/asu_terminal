import Select from 'react-select';
import {days} from '../../constants/data';

function DropdownDay(){

    const content = [];
      for (let key in days) {
        content.push({value: key,
                      label: days[key]});
  
      }

    return (
       <div>
            <Select options={content}/>
       </div> 
    )
}

export default DropdownDay