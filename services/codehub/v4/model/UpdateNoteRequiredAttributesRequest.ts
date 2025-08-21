import { PostNoteRequiredAttributeDto } from './PostNoteRequiredAttributeDto';


export class UpdateNoteRequiredAttributesRequest {
    private 'repository_id'?: number;
    public body?: PostNoteRequiredAttributeDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateNoteRequiredAttributesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: PostNoteRequiredAttributeDto): UpdateNoteRequiredAttributesRequest {
        this['body'] = body;
        return this;
    }
}