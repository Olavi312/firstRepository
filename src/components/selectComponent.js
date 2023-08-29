
function SelectComponent({carray, cid, clabel}) {

  return (
    <>
        <div class="form-floating mb-3">
            <select class="form-select" id={cid} aria-label="Floating label select example">
                {carray.map((value)=>
                // value === crtvalue ?
                // <option value={crtvalue} selected>{crtvalue}</option>:
                <option value={value}>{value}</option>
                )}
            </select>
            <label for="toolFontSize">{clabel}</label>
        </div>
        
    </>
  );
}

export default SelectComponent;
