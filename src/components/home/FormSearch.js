import { useState } from 'react';

const FormSearch = () => {

    const [state, setstate] = useState('');

    const onChange = (e) => {
        setstate(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(state);        
    }


    return (        
        <>
            <div clasName="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-12 col-md-12">
                        <h1 className="display-1 text-center ">Rick and morty</h1>
                        <form className="text-center mt-5 mb-3"
                            onSubmit={onSubmit}
                        >
                            <div className="row g-3">
                                <div className="col-sm-4">
                                    <select 
                                        className="form-select" 
                                        aria-label="Select Character or Episode" 
                                        onChange={onChange}
                                    >                                        
                                        <option selected value="character">
                                            Character
                                        </option>
                                        <option value="episode">
                                            Episode
                                        </option>
                                    </select>
                                </div>
                                <div className="col-sm-8">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Type the name of the character or episode..." 
                                        aria-label="Character or Episodes" 
                                    />
                                </div>
                                <div className="col-sm d-grid gap-2">
                                    <button className="btn btn-warning text-white" type="submit">Search</button>
                                </div>
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default FormSearch;