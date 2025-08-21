import { BatchCreateRepositoryMemberBodyDto } from './BatchCreateRepositoryMemberBodyDto';


export class AddRepositoryMembersRequest {
    private 'repository_id'?: number;
    public body?: BatchCreateRepositoryMemberBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AddRepositoryMembersRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchCreateRepositoryMemberBodyDto): AddRepositoryMembersRequest {
        this['body'] = body;
        return this;
    }
}