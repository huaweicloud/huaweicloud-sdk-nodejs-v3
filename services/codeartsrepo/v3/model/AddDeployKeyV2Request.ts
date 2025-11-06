import { AddDeployKeyRequestBody } from './AddDeployKeyRequestBody';


export class AddDeployKeyV2Request {
    private 'repository_id'?: number;
    public body?: AddDeployKeyRequestBody;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AddDeployKeyV2Request {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: AddDeployKeyRequestBody): AddDeployKeyV2Request {
        this['body'] = body;
        return this;
    }
}