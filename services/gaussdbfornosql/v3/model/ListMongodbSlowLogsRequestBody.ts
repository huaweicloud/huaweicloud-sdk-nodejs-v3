

export class ListMongodbSlowLogsRequestBody {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    private 'line_num'?: string;
    private 'operate_type'?: ListMongodbSlowLogsRequestBodyOperateTypeEnum | string;
    private 'node_id'?: string;
    public keywords?: Array<string>;
    private 'database_keywords'?: Array<string>;
    private 'collection_keywords'?: Array<string>;
    private 'max_cost_time'?: number;
    private 'min_cost_time'?: number;
    public constructor(startTime?: string, endTime?: string, limit?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withStartTime(startTime: string): ListMongodbSlowLogsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMongodbSlowLogsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListMongodbSlowLogsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withLineNum(lineNum: string): ListMongodbSlowLogsRequestBody {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withOperateType(operateType: ListMongodbSlowLogsRequestBodyOperateTypeEnum | string): ListMongodbSlowLogsRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: ListMongodbSlowLogsRequestBodyOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): ListMongodbSlowLogsRequestBodyOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withNodeId(nodeId: string): ListMongodbSlowLogsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeywords(keywords: Array<string>): ListMongodbSlowLogsRequestBody {
        this['keywords'] = keywords;
        return this;
    }
    public withDatabaseKeywords(databaseKeywords: Array<string>): ListMongodbSlowLogsRequestBody {
        this['database_keywords'] = databaseKeywords;
        return this;
    }
    public set databaseKeywords(databaseKeywords: Array<string>  | undefined) {
        this['database_keywords'] = databaseKeywords;
    }
    public get databaseKeywords(): Array<string> | undefined {
        return this['database_keywords'];
    }
    public withCollectionKeywords(collectionKeywords: Array<string>): ListMongodbSlowLogsRequestBody {
        this['collection_keywords'] = collectionKeywords;
        return this;
    }
    public set collectionKeywords(collectionKeywords: Array<string>  | undefined) {
        this['collection_keywords'] = collectionKeywords;
    }
    public get collectionKeywords(): Array<string> | undefined {
        return this['collection_keywords'];
    }
    public withMaxCostTime(maxCostTime: number): ListMongodbSlowLogsRequestBody {
        this['max_cost_time'] = maxCostTime;
        return this;
    }
    public set maxCostTime(maxCostTime: number  | undefined) {
        this['max_cost_time'] = maxCostTime;
    }
    public get maxCostTime(): number | undefined {
        return this['max_cost_time'];
    }
    public withMinCostTime(minCostTime: number): ListMongodbSlowLogsRequestBody {
        this['min_cost_time'] = minCostTime;
        return this;
    }
    public set minCostTime(minCostTime: number  | undefined) {
        this['min_cost_time'] = minCostTime;
    }
    public get minCostTime(): number | undefined {
        return this['min_cost_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMongodbSlowLogsRequestBodyOperateTypeEnum {
    INSERT = 'insert',
    QUERY = 'query',
    UPDATE = 'update',
    REMOVE = 'remove',
    GETMORE = 'getmore',
    COMMAND = 'command',
    KILLCURSORS = 'killcursors'
}
