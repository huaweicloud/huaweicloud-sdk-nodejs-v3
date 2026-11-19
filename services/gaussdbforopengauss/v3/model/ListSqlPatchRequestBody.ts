import { SqlPatchQueryInfoOption } from './SqlPatchQueryInfoOption';


export class ListSqlPatchRequestBody {
    private 'instance_id'?: string;
    private 'query_info'?: SqlPatchQueryInfoOption;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withInstanceId(instanceId: string): ListSqlPatchRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withQueryInfo(queryInfo: SqlPatchQueryInfoOption): ListSqlPatchRequestBody {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: SqlPatchQueryInfoOption  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): SqlPatchQueryInfoOption | undefined {
        return this['query_info'];
    }
    public withOffset(offset: number): ListSqlPatchRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSqlPatchRequestBody {
        this['limit'] = limit;
        return this;
    }
}