import { ReviewSettingParamDto } from './ReviewSettingParamDto';


export class CreateReviewSettingRequest {
    private 'repository_id'?: number;
    public body?: ReviewSettingParamDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateReviewSettingRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: ReviewSettingParamDto): CreateReviewSettingRequest {
        this['body'] = body;
        return this;
    }
}