import { RepositoryMember } from './RepositoryMember';


export class RepositoryMemberList {
    public total?: number;
    public users?: Array<RepositoryMember>;
    public constructor() { 
    }
    public withTotal(total: number): RepositoryMemberList {
        this['total'] = total;
        return this;
    }
    public withUsers(users: Array<RepositoryMember>): RepositoryMemberList {
        this['users'] = users;
        return this;
    }
}