import React, {Component} from 'react';
import classes from './QuizeList.css';
import {NavLink} from 'react-router-dom';
import Loader from "../../components/UI/Loader/Loader";
import {connect} from 'react-redux';
import {fetchQuizes} from "../../store/actions/quize";

class QuizeList extends Component {


    renderQuizes(){
        return this.props.quizes.map((quize) => {
            return (
                <li
                    key={quize.id}
                >
                    <NavLink to={'/quize/' + quize.id}>
                        {quize.name}
                    </NavLink>
                </li>
            )
        });
    }

    componentDidMount() {
        this.props.fetchQuizes();

    }


    render(){
        return (

            <div className={classes.QuizeList}>
                <div>
                    <h1>Список тестов</h1>

                    { this.props.loading && this.props.quizes.length !== 0
                        ? <Loader />
                        : <ul>
                            {this.renderQuizes()}
                        </ul>
                    }
                </div>
            </div>



        )
    }

}

function mapStateToProps(state) {
    console.log('STATE', state)
    return {
        quizes: state.quize.quizes,
        loading: state.quize.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizeList)
