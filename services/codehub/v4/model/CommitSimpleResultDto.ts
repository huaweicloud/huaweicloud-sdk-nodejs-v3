import { CommitDto } from './CommitDto';


export class CommitSimpleResultDto {
    public commits?: Array<CommitDto>;
    public constructor() { 
    }
    public withCommits(commits: Array<CommitDto>): CommitSimpleResultDto {
        this['commits'] = commits;
        return this;
    }
}