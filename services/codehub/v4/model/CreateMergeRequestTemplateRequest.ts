import { CreateMergeRequestTemplateDto } from './CreateMergeRequestTemplateDto';


export class CreateMergeRequestTemplateRequest {
    private 'repository_id'?: number;
    public body?: CreateMergeRequestTemplateDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateMergeRequestTemplateRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: CreateMergeRequestTemplateDto): CreateMergeRequestTemplateRequest {
        this['body'] = body;
        return this;
    }
}