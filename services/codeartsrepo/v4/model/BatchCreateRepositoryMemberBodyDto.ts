import { CreateRepositoryMemberDto } from './CreateRepositoryMemberDto';


export class BatchCreateRepositoryMemberBodyDto {
    public users?: Array<CreateRepositoryMemberDto>;
    public constructor(users?: Array<CreateRepositoryMemberDto>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<CreateRepositoryMemberDto>): BatchCreateRepositoryMemberBodyDto {
        this['users'] = users;
        return this;
    }
}