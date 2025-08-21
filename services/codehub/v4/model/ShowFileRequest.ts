

export class ShowFileRequest {
    private 'repository_id'?: number;
    public ref?: string;
    private 'file_path'?: string;
    public constructor(repositoryId?: number, filePath?: string) { 
        this['repository_id'] = repositoryId;
        this['file_path'] = filePath;
    }
    public withRepositoryId(repositoryId: number): ShowFileRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRef(ref: string): ShowFileRequest {
        this['ref'] = ref;
        return this;
    }
    public withFilePath(filePath: string): ShowFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}