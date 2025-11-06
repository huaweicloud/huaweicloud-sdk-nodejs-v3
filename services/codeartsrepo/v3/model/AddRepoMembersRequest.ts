import { CreateRepoMemberRequest } from './CreateRepoMemberRequest';


export class AddRepoMembersRequest {
    private 'repository_uuid'?: string;
    public body?: CreateRepoMemberRequest;
    public constructor(repositoryUuid?: string) { 
        this['repository_uuid'] = repositoryUuid;
    }
    public withRepositoryUuid(repositoryUuid: string): AddRepoMembersRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withBody(body: CreateRepoMemberRequest): AddRepoMembersRequest {
        this['body'] = body;
        return this;
    }
}