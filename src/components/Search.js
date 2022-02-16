import React, { useContext, useState } from 'react';
import { AlertContext } from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)
    const {loading} = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()){
            github.search(value.trim())
            alert.hide()
        } else {
            alert.show('Введите данные пользователя.')
        }
    }

    const onBtnSubmit = () => {
        console.log('button')
        github.clearUsers()

        if (value.trim()){
            github.search(value.trim())
            alert.hide()
        } else {
            alert.show('Введите данные пользователя.')
        }
    }

    return (
    <div className="input-group d-flex mb-3">
        <input className="form-control"
               type="search"
               aria-label="Search"
               placeholder='Введите ник пользователя...'
               value={value}
               onChange={event => setValue(event.target.value)}
               onKeyPress={onSubmit}
        />
        <button className="btn btn-warning" onClick={onBtnSubmit} style={{width: '100px'}}>
            <i className="fa-solid fa-magnifying-glass"/>
            {
                loading ? <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/> : ' Поиск'
            }

        </button>
    </div>
    );
};
