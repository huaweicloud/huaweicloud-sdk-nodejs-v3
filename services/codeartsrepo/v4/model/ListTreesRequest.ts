

export class ListTreesRequest {
    private 'repository_id'?: number;
    public ref?: string;
    public path?: string;
    public recursive?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListTreesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRef(ref: string): ListTreesRequest {
        this['ref'] = ref;
        return this;
    }
    public withPath(path: string): ListTreesRequest {
        this['path'] = path;
        return this;
    }
    public withRecursive(recursive: boolean): ListTreesRequest {
        this['recursive'] = recursive;
        return this;
    }
    public withOffset(offset: number): ListTreesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTreesRequest {
        this['limit'] = limit;
        return this;
    }
}