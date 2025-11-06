import { AddTagsRequest } from './AddTagsRequest';


export class AddTagV2Request {
    private 'repository_id'?: number;
    public body?: AddTagsRequest;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AddTagV2Request {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: AddTagsRequest): AddTagV2Request {
        this['body'] = body;
        return this;
    }
}