

export class ListHistogramsRequestBody {
    private 'dataspace_id'?: string;
    public from?: number;
    private 'pipe_id'?: string;
    public query?: string;
    public to?: number;
    public constructor(dataspaceId?: string, from?: number, pipeId?: string, query?: string, to?: number) { 
        this['dataspace_id'] = dataspaceId;
        this['from'] = from;
        this['pipe_id'] = pipeId;
        this['query'] = query;
        this['to'] = to;
    }
    public withDataspaceId(dataspaceId: string): ListHistogramsRequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withFrom(from: number): ListHistogramsRequestBody {
        this['from'] = from;
        return this;
    }
    public withPipeId(pipeId: string): ListHistogramsRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withQuery(query: string): ListHistogramsRequestBody {
        this['query'] = query;
        return this;
    }
    public withTo(to: number): ListHistogramsRequestBody {
        this['to'] = to;
        return this;
    }
}