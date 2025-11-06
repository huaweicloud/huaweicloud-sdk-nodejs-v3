import { Commit } from './Commit';


export class CommitList {
    public commits?: Array<Commit>;
    public total?: number;
    public constructor() { 
    }
    public withCommits(commits: Array<Commit>): CommitList {
        this['commits'] = commits;
        return this;
    }
    public withTotal(total: number): CommitList {
        this['total'] = total;
        return this;
    }
}