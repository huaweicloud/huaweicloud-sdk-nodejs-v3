

export class CreateAnalysisRequestBody {
    private 'dataspace_id'?: string;
    public from?: number;
    public limit?: number;
    public offset?: number;
    private 'pipe_id'?: string;
    public query?: string;
    private 'query_type'?: CreateAnalysisRequestBodyQueryTypeEnum | string;
    public to?: number;
    public constructor(dataspaceId?: string, from?: number, limit?: number, offset?: number, pipeId?: string, query?: string, queryType?: string, to?: number) { 
        this['dataspace_id'] = dataspaceId;
        this['from'] = from;
        this['limit'] = limit;
        this['offset'] = offset;
        this['pipe_id'] = pipeId;
        this['query'] = query;
        this['query_type'] = queryType;
        this['to'] = to;
    }
    public withDataspaceId(dataspaceId: string): CreateAnalysisRequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withFrom(from: number): CreateAnalysisRequestBody {
        this['from'] = from;
        return this;
    }
    public withLimit(limit: number): CreateAnalysisRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): CreateAnalysisRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withPipeId(pipeId: string): CreateAnalysisRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withQuery(query: string): CreateAnalysisRequestBody {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: CreateAnalysisRequestBodyQueryTypeEnum | string): CreateAnalysisRequestBody {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: CreateAnalysisRequestBodyQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): CreateAnalysisRequestBodyQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withTo(to: number): CreateAnalysisRequestBody {
        this['to'] = to;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAnalysisRequestBodyQueryTypeEnum {
    SQL = 'SQL',
    CBSL = 'CBSL'
}
