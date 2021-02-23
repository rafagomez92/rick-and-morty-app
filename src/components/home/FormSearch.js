import { useState, useEffect } from 'react';
import { getSearchAction } from '../../redux/searchDuck';
import { connect } from 'react-redux';
import CardEpisodes from '../episodes/CardEpisodes';
import CardCharacter from '../characters/CardCharacter';

const FormSearch = ({ getSearchAction, fetching, resultSearch, optionSearch }) => {

    const [ error, setError ] = useState(false);
    const [option, setOption] = useState('character');
    const [ name, setName ] = useState('');      
    
        
    const onChangeOption = (e) => {
        setOption(e.target.value);
    };

    const listSearch = resultSearch.map(item => 
        {
            return option === 'character' 
            ? <CardCharacter character={item} key={item.id} />
            : <CardEpisodes episode={item} key={item.id} /> 
        }        
    );
    
    const onChangeName = (e) => {
        setName(e.target.value.toLowerCase());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(name.trim() === '' || option === '' ) {
            setError(true);
            return;
        }
        setError(false);                    
        getSearchAction({option, name});               
    }

    return (        
        <>
            <div className="container">                
                <div className="row justify-content-center">
                    <div className="card shadow-sm">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <h1 className="display-1 text-center ">Rick and morty</h1>
                        <form className="text-center mt-5 mb-3"
                            onSubmit={onSubmit}
                        >
                            <div className="row g-3">
                                <div className="col-sm-3">
                                    <select 
                                        className="form-select" 
                                        aria-label="Select Character or Episode" 
                                        onChange={onChangeOption}
                                        value={option} 
                                    >                               
                                        <option value="character">
                                            Character
                                        </option>
                                        <option value="episode">
                                            Episode
                                        </option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <input 
                                        type="text" 
                                        name="name"                                        
                                        className="form-control" 
                                        placeholder="Type the name of the character or episode..." 
                                        aria-label="Character or Episodes" 
                                        value={name}
                                        onChange={onChangeName}
                                    />
                                </div>
                                <div className="col-sm-3 d-grid gap-2">
                                    <button className="btn btn-warning text-white" type="submit">Search</button>
                                </div>
                                {error && <p className="alert alert-danger">Check fields are not empty</p>}
                            </div>                            
                        </form>
                        {fetching === true && <p className="alert alert-warning">Cargando...</p> }
                        
                    </div>                
                    <div className="row justify-content-center mt-3">
                        {listSearch}
                    </div>                    
                </div>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(state){
    return {
        resultSearch: state.search.resultSearch,
        optionSearch: state.search.optionSearch,
        fetching: state.search.fetching
    }

}


export default connect(mapStateToProps,{ getSearchAction })(FormSearch);