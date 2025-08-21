import { DeployKeyValueDto } from './DeployKeyValueDto';


export class CheckDeployKeyRequest {
    private 'repository_id'?: number;
    public body?: DeployKeyValueDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CheckDeployKeyRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: DeployKeyValueDto): CheckDeployKeyRequest {
        this['body'] = body;
        return this;
    }
}