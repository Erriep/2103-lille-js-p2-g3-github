import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StyledUserRepo from './styledComponents/SuserRepo';

function UserRepoDate() {
  const [repolist, setRepolist] = useState([]);
  const { login } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then(({ data }) => {
        setRepolist(data);
      });
  }, [login]);

  return (
    <StyledUserRepo>
      <p>The five most recently created repositories</p>
      <section className="UserStarsRepo">
        <div className="cardeList">
          {repolist
            .sort(function compare(a, b) {
              return Date.parse(b.created_at) - Date.parse(a.created_at);
            })
            .slice(0, 5)
            .map((repo) => {
              return (
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <ul className="carde">
                    <div className="repoInfo">
                      <li className="repoName">{repo.name}</li>
                      <li className="repoDesc">
                        {repo.created_at
                          .substring(0, 10)
                          .split('-')
                          .reverse()
                          .join('-')}
                      </li>
                    </div>
                    <div className="repoTechno">
                      <li className={repo.language}>{repo.language}</li>
                    </div>
                  </ul>
                </a>
              );
            })}
        </div>
      </section>
    </StyledUserRepo>
  );
}
export default UserRepoDate;
