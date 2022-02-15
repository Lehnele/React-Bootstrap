import React, {useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { GithubContext } from '../context/github/githubContext';
import {Loader} from "../components/Loader";
import {Repos} from "../components/Repos";


function Loadre() {
    return null;
}

export const Profile = () => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const { name: urlName } = useParams()

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
    }, [])
    if (loading) {
        return <Loader/>
    }

    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos, public_gists
    } = user

    return (
        <>
            <div className='card mb-4'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{borderRadius: '17px', width: '150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a href={html_url} ratget='_blank' className='btn btn-dark'>Открыть профиль</a>
                            <ul>
                                { login && <li><strong>Username: </strong>{login}</li> }
                                { company && <li><strong>Компания: </strong>{company}</li> }
                                { blog && <li><strong>Website: </strong>{blog}</li> }
                            </ul>
                            <div className="badge rounded-pill bg-danger">Подписчики: {followers}</div>
                            <div className="badge rounded-pill bg-warning">подписан: {following}</div>
                            <div className="badge rounded-pill bg-success">Репозитории: {public_repos}</div>
                            <div className="badge rounded-pill bg-info">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={repos}/>
        </>
    );
};