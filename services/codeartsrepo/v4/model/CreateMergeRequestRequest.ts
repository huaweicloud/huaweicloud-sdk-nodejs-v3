import { PostMergeRequestParamsDtoForOpenApi } from './PostMergeRequestParamsDtoForOpenApi';


export class CreateMergeRequestRequest {
    private 'repository_id'?: number;
    public body?: PostMergeRequestParamsDtoForOpenApi;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateMergeRequestRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: PostMergeRequestParamsDtoForOpenApi): CreateMergeRequestRequest {
        this['body'] = body;
        return this;
    }
}