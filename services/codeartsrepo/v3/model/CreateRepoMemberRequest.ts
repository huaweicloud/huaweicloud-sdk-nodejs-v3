import { RepoMemberInfo } from './RepoMemberInfo';


export class CreateRepoMemberRequest {
    public users?: Array<RepoMemberInfo>;
    public constructor() { 
    }
    public withUsers(users: Array<RepoMemberInfo>): CreateRepoMemberRequest {
        this['users'] = users;
        return this;
    }
}