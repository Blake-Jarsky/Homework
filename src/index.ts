import { GithubApiService } from './githubApiService';
import * as _ from 'lodash';
import { User } from './user';
import { Repo } from './repo';

let svc = new GithubApiService();
if (process.argv.length < 3) {
    console.log('Please pass the username as an argument')
} else {
    let username = process.argv[2];

    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}


