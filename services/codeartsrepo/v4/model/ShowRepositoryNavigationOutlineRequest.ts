

export class ShowRepositoryNavigationOutlineRequest {
    private 'repository_id'?: number;
    public revision?: string;
    public ref?: string;
    public language?: string;
    public blob?: string;
    private 'file_path'?: string;
    public constructor(repositoryId?: number, language?: string, blob?: string, filePath?: string) { 
        this['repository_id'] = repositoryId;
        this['language'] = language;
        this['blob'] = blob;
        this['file_path'] = filePath;
    }
    public withRepositoryId(repositoryId: number): ShowRepositoryNavigationOutlineRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRevision(revision: string): ShowRepositoryNavigationOutlineRequest {
        this['revision'] = revision;
        return this;
    }
    public withRef(ref: string): ShowRepositoryNavigationOutlineRequest {
        this['ref'] = ref;
        return this;
    }
    public withLanguage(language: string): ShowRepositoryNavigationOutlineRequest {
        this['language'] = language;
        return this;
    }
    public withBlob(blob: string): ShowRepositoryNavigationOutlineRequest {
        this['blob'] = blob;
        return this;
    }
    public withFilePath(filePath: string): ShowRepositoryNavigationOutlineRequest {
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