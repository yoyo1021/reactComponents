import './range.scss';

export default function Range({ labelTxt,min, max, step,rangeVal,setRangeVal}) {

    return (<>
        <div className="range position-relative py-3">
            <label htmlFor="customRange1" className="form-label">{labelTxt}</label>
            <input type="range" className="form-range" id="customRange1" min={min} max={max} step={step} onChange={(e) => {
                setRangeVal(e.target.value)
            }} 
            />
            <div className="position-absolute bottom-0 rangeValue text-end" style={{left:`clamp(0%, ${((rangeVal - min) / (max - min)) * 100}%, 90%)` }}>{rangeVal}</div>
        </div>

    </>)
}