import { UpdateFileBodyDto } from './UpdateFileBodyDto';


export class UpdateFileRequest {
    private 'repository_id'?: number;
    private 'file_path'?: string;
    public body?: UpdateFileBodyDto;
    public constructor(repositoryId?: number, filePath?: string) { 
        this['repository_id'] = repositoryId;
        this['file_path'] = filePath;
    }
    public withRepositoryId(repositoryId: number): UpdateFileRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withFilePath(filePath: string): UpdateFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBody(body: UpdateFileBodyDto): UpdateFileRequest {
        this['body'] = body;
        return this;
    }
}