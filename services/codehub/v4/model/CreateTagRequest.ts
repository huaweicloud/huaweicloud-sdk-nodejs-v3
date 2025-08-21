import { CreateTagDto } from './CreateTagDto';


export class CreateTagRequest {
    private 'repository_id'?: number;
    public body?: CreateTagDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateTagRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: CreateTagDto): CreateTagRequest {
        this['body'] = body;
        return this;
    }
}