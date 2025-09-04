

export class BatchListModulesRequest {
    private 'edge_node_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'app_type'?: BatchListModulesRequestAppTypeEnum | string;
    private 'function_type'?: BatchListModulesRequestFunctionTypeEnum | string;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): BatchListModulesRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withOffset(offset: number): BatchListModulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListModulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withAppType(appType: BatchListModulesRequestAppTypeEnum | string): BatchListModulesRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: BatchListModulesRequestAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): BatchListModulesRequestAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withFunctionType(functionType: BatchListModulesRequestFunctionTypeEnum | string): BatchListModulesRequest {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: BatchListModulesRequestFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): BatchListModulesRequestFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListModulesRequestAppTypeEnum {
    SYSTEM_REQUIRED = 'SYSTEM_REQUIRED',
    SYSTEM_OPTIONAL = 'SYSTEM_OPTIONAL',
    USER = 'USER'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchListModulesRequestFunctionTypeEnum {
    DATA_PROCESSING = 'DATA_PROCESSING',
    PROTOCOL_PARSING = 'PROTOCOL_PARSING',
    ON_PREMISE_INTEGRATION = 'ON_PREMISE_INTEGRATION'
}
