

export class ListLogsTreeRequest {
    private 'repository_id'?: number;
    public ref?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListLogsTreeRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRef(ref: string): ListLogsTreeRequest {
        this['ref'] = ref;
        return this;
    }
    public withOffset(offset: number): ListLogsTreeRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLogsTreeRequest {
        this['limit'] = limit;
        return this;
    }
}