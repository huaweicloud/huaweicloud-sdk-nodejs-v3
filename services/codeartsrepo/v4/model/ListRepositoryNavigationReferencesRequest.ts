

export class ListRepositoryNavigationReferencesRequest {
    private 'repository_id'?: number;
    public path?: string;
    public revision?: string;
    public ref?: string;
    public symbol?: string;
    public language?: string;
    public blob?: string;
    private 'file_path'?: string;
    public constructor(repositoryId?: number, symbol?: string, language?: string, blob?: string, filePath?: string) { 
        this['repository_id'] = repositoryId;
        this['symbol'] = symbol;
        this['language'] = language;
        this['blob'] = blob;
        this['file_path'] = filePath;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryNavigationReferencesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withPath(path: string): ListRepositoryNavigationReferencesRequest {
        this['path'] = path;
        return this;
    }
    public withRevision(revision: string): ListRepositoryNavigationReferencesRequest {
        this['revision'] = revision;
        return this;
    }
    public withRef(ref: string): ListRepositoryNavigationReferencesRequest {
        this['ref'] = ref;
        return this;
    }
    public withSymbol(symbol: string): ListRepositoryNavigationReferencesRequest {
        this['symbol'] = symbol;
        return this;
    }
    public withLanguage(language: string): ListRepositoryNavigationReferencesRequest {
        this['language'] = language;
        return this;
    }
    public withBlob(blob: string): ListRepositoryNavigationReferencesRequest {
        this['blob'] = blob;
        return this;
    }
    public withFilePath(filePath: string): ListRepositoryNavigationReferencesRequest {
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