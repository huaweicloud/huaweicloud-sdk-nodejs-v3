

export class ShowFileRequest {
    private 'repo_id'?: number;
    private 'file_path'?: string;
    public ref?: string;
    public constructor(repoId?: number, filePath?: string, ref?: string) { 
        this['repo_id'] = repoId;
        this['file_path'] = filePath;
        this['ref'] = ref;
    }
    public withRepoId(repoId: number): ShowFileRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
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
    public withRef(ref: string): ShowFileRequest {
        this['ref'] = ref;
        return this;
    }
}