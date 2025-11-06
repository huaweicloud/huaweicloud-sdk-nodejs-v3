import { CommitRepoV2 } from './CommitRepoV2';


export class AddTagsResponse {
    public name?: string;
    public message?: string;
    public commit?: CommitRepoV2;
    public constructor() { 
    }
    public withName(name: string): AddTagsResponse {
        this['name'] = name;
        return this;
    }
    public withMessage(message: string): AddTagsResponse {
        this['message'] = message;
        return this;
    }
    public withCommit(commit: CommitRepoV2): AddTagsResponse {
        this['commit'] = commit;
        return this;
    }
}