import { AddDeployKeyRequestBody } from './AddDeployKeyRequestBody';


export class AddDeployKeyRequest {
    private 'repository_id'?: number;
    public body?: AddDeployKeyRequestBody;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AddDeployKeyRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: AddDeployKeyRequestBody): AddDeployKeyRequest {
        this['body'] = body;
        return this;
    }
}