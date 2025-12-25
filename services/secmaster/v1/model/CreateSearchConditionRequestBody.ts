

export class CreateSearchConditionRequestBody {
    private 'condition_name'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    public query?: string;
    public constructor(conditionName?: string, dataspaceId?: string, pipeId?: string, query?: string) { 
        this['condition_name'] = conditionName;
        this['dataspace_id'] = dataspaceId;
        this['pipe_id'] = pipeId;
        this['query'] = query;
    }
    public withConditionName(conditionName: string): CreateSearchConditionRequestBody {
        this['condition_name'] = conditionName;
        return this;
    }
    public set conditionName(conditionName: string  | undefined) {
        this['condition_name'] = conditionName;
    }
    public get conditionName(): string | undefined {
        return this['condition_name'];
    }
    public withDataspaceId(dataspaceId: string): CreateSearchConditionRequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): CreateSearchConditionRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withQuery(query: string): CreateSearchConditionRequestBody {
        this['query'] = query;
        return this;
    }
}