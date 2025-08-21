

export class ListFileBlameLinesRequest {
    private 'repository_id'?: number;
    private 'file_path'?: string;
    public sha?: string;
    public constructor(repositoryId?: number, filePath?: string, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['file_path'] = filePath;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): ListFileBlameLinesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withFilePath(filePath: string): ListFileBlameLinesRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withSha(sha: string): ListFileBlameLinesRequest {
        this['sha'] = sha;
        return this;
    }
}