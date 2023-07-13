

export class QueryAvailableNodeTypeReq {
    private 'engine_type': string | undefined;
    private 'db_use_type': QueryAvailableNodeTypeReqDbUseTypeEnum | undefined;
    private 'job_direction': QueryAvailableNodeTypeReqJobDirectionEnum | undefined;
    private 'node_type': string | undefined;
    private 'multi_write'?: string | undefined;
    public constructor(engineType?: any, dbUseType?: any, jobDirection?: any, nodeType?: any) { 
        this['engine_type'] = engineType;
        this['db_use_type'] = dbUseType;
        this['job_direction'] = jobDirection;
        this['node_type'] = nodeType;
    }
    public withEngineType(engineType: string): QueryAvailableNodeTypeReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withDbUseType(dbUseType: QueryAvailableNodeTypeReqDbUseTypeEnum): QueryAvailableNodeTypeReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: QueryAvailableNodeTypeReqDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
        return this['db_use_type'];
    }
    public withJobDirection(jobDirection: QueryAvailableNodeTypeReqJobDirectionEnum): QueryAvailableNodeTypeReq {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: QueryAvailableNodeTypeReqJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withNodeType(nodeType: string): QueryAvailableNodeTypeReq {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withMultiWrite(multiWrite: string): QueryAvailableNodeTypeReq {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: string | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite() {
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
