

export class QueryAvailableNodeTypeReq {
    private 'engine_type'?: string;
    private 'db_use_type'?: QueryAvailableNodeTypeReqDbUseTypeEnum | string;
    private 'job_direction'?: QueryAvailableNodeTypeReqJobDirectionEnum | string;
    private 'node_type'?: string;
    private 'multi_write'?: string;
    public constructor(engineType?: string, dbUseType?: string, jobDirection?: string, nodeType?: string) { 
        this['engine_type'] = engineType;
        this['db_use_type'] = dbUseType;
        this['job_direction'] = jobDirection;
        this['node_type'] = nodeType;
    }
    public withEngineType(engineType: string): QueryAvailableNodeTypeReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withDbUseType(dbUseType: QueryAvailableNodeTypeReqDbUseTypeEnum | string): QueryAvailableNodeTypeReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: QueryAvailableNodeTypeReqDbUseTypeEnum | string  | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType(): QueryAvailableNodeTypeReqDbUseTypeEnum | string | undefined {
        return this['db_use_type'];
    }
    public withJobDirection(jobDirection: QueryAvailableNodeTypeReqJobDirectionEnum | string): QueryAvailableNodeTypeReq {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: QueryAvailableNodeTypeReqJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): QueryAvailableNodeTypeReqJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withNodeType(nodeType: string): QueryAvailableNodeTypeReq {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withMultiWrite(multiWrite: string): QueryAvailableNodeTypeReq {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: string  | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite(): string | undefined {
        return this['multi_write'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryAvailableNodeTypeReqDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryAvailableNodeTypeReqJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
