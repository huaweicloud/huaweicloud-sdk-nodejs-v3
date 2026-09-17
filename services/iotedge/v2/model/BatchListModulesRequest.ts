

export class BatchListModulesRequest {
    private 'edge_node_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'app_type'?: BatchListModulesRequestAppTypeEnum | string;
    private 'function_type'?: BatchListModulesRequestFunctionTypeEnum | string;
    private 'function_types'?: Array<string>;
    private 'protocol_types'?: Array<string>;
    private 'module_name'?: string;
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
    public withFunctionTypes(functionTypes: Array<string>): BatchListModulesRequest {
        this['function_types'] = functionTypes;
        return this;
    }
    public set functionTypes(functionTypes: Array<string>  | undefined) {
        this['function_types'] = functionTypes;
    }
    public get functionTypes(): Array<string> | undefined {
        return this['function_types'];
    }
    public withProtocolTypes(protocolTypes: Array<string>): BatchListModulesRequest {
        this['protocol_types'] = protocolTypes;
        return this;
    }
    public set protocolTypes(protocolTypes: Array<string>  | undefined) {
        this['protocol_types'] = protocolTypes;
    }
    public get protocolTypes(): Array<string> | undefined {
        return this['protocol_types'];
    }
    public withModuleName(moduleName: string): BatchListModulesRequest {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
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
    ON_PREMISE_INTEGRATION = 'ON_PREMISE_INTEGRATION',
    GATEWAY_MANAGER = 'GATEWAY_MANAGER',
    COMPOSITE_APPLICATION = 'COMPOSITE_APPLICATION',
    DATA_COLLECTION = 'DATA_COLLECTION',
    MODEL_INFERENCE = 'MODEL_INFERENCE'
}
