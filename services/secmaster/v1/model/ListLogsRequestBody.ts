

export class ListLogsRequestBody {
    private 'dataspace_id'?: string;
    public from?: number;
    public limit?: number;
    public offset?: number;
    private 'pipe_id'?: string;
    public query?: string;
    public sort?: ListLogsRequestBodySortEnum | string;
    public to?: number;
    public constructor(dataspaceId?: string, from?: number, limit?: number, offset?: number, pipeId?: string, query?: string, sort?: string, to?: number) { 
        this['dataspace_id'] = dataspaceId;
        this['from'] = from;
        this['limit'] = limit;
        this['offset'] = offset;
        this['pipe_id'] = pipeId;
        this['query'] = query;
        this['sort'] = sort;
        this['to'] = to;
    }
    public withDataspaceId(dataspaceId: string): ListLogsRequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withFrom(from: number): ListLogsRequestBody {
        this['from'] = from;
        return this;
    }
    public withLimit(limit: number): ListLogsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLogsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withPipeId(pipeId: string): ListLogsRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withQuery(query: string): ListLogsRequestBody {
        this['query'] = query;
        return this;
    }
    public withSort(sort: ListLogsRequestBodySortEnum | string): ListLogsRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withTo(to: number): ListLogsRequestBody {
        this['to'] = to;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLogsRequestBodySortEnum {
    DESC = 'desc',
    ASC = 'asc'
}
