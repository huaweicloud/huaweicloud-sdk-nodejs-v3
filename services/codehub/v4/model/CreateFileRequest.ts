import { FileBodyDto } from './FileBodyDto';


export class CreateFileRequest {
    private 'repository_id'?: number;
    public body?: FileBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateFileRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: FileBodyDto): CreateFileRequest {
        this['body'] = body;
        return this;
    }
}