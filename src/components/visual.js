import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.js';

import { ChromePicker } from 'react-color';
import SelectComponent from './selectComponent';



import { useState } from 'react';
import { useEffect } from 'react';
import { render } from '@testing-library/react';

const toolfontsizearray =['5','6','7','8','9','10','11','12','13','14','15'];
const toolwidtharray = ['100','200','300','400','500'];
const tooldistancearray=['0','1','2','3','4','5','6','7','8'];
const toolbackgroundarray=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];


function Visual() {

    const [fontcolor, setFontColor] = useState('#ffffff');
    const [collapseFont, setCollapseFont] = useState(false);  
    
    const [backcolor, setBackColor] = useState('#000000');
    const [collapseBack, setCollapseBack] = useState(false);
 
  return (
    <>
    <SelectComponent carray={toolfontsizearray} cid='toolFontSize' clabel='Tooltip Font Size'/>
    <SelectComponent carray={toolwidtharray} cid='toolWidth' clabel='Tooltip Width'/>
    <SelectComponent carray={tooldistancearray} cid='toolDistance' clabel='Tooltip Distance'/>

      <div class="form-floating mb-3">
            <select class="form-select" id="toolPosition" aria-label="Floating label select example">
                <option value='follow'>Follow</option>
                <option value='fixed'>Fixed</option>
            </select>
            <label for="toolPosition">Tooltip Position</label>
      </div>

      <div class="form-floating mb-3">
            <select class="form-select" id="toolTextAlign" aria-label="Floating label select example">
                <option value='center'>Center</option>
                <option value='left'>Left</option>
                <option value='right'>Right</option>
                <option value='justify'>Justify</option>
            </select>
            <label for="toolTextAlign">Tooltip Text Align</label>
      </div>
    <SelectComponent carray={toolbackgroundarray} cid='toolBackgroundBlur' clabel='Tooltip Background Blur'/>

      <div class="input-group form-floating mb-3" id="toolFontColor"  aria-label="Floating label select example">
            <input type="text" class="form-control" value={fontcolor} onChange={e=> setFontColor(e.target.value)}/>
                <span class="input-group-text"  id="basic-addon2">
                    <span class="shadow p-2 border rounded-circle" onClick={() => setCollapseFont(!collapseFont)} style={{backgroundColor:fontcolor}}></span>
                </span>
            <label for="toolFontColor">Tooltip Font Color</label>
      </div>
      {collapseFont && (
                <div>
                    <ChromePicker color={fontcolor} onChange={newColor => setFontColor(newColor.hex)} />
                </div>
        )}
        
      <div class="input-group form-floating mb-3" id="toolBackgroundColor"  aria-label="Floating label select example">
            <input type="text" class="form-control" value={backcolor} onChange={e=> setBackColor(e.target.value)}/>
                <span class="input-group-text"  id="basic-addon2">
                    <span class="shadow p-2 border rounded-circle" onClick={() => setCollapseBack(!collapseBack)} style={{backgroundColor:backcolor}}></span>
                </span>
            <label for="toolBackgroundColor">Tooltip Background Color</label>
      </div>
      {collapseBack && (
                <div>
                    <ChromePicker color={backcolor} onChange={newColor => setBackColor(newColor.hex)} />
                </div>
        )}
      
    </>
  );
}

export default Visual;
