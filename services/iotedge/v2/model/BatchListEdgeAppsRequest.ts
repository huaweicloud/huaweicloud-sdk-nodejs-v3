

export class BatchListEdgeAppsRequest {
    private 'edge_app_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'app_type'?: BatchListEdgeAppsRequestAppTypeEnum | string;
    private 'function_type'?: BatchListEdgeAppsRequestFunctionTypeEnum | string;
    public constructor() { 
    }
    public withEdgeAppId(edgeAppId: string): BatchListEdgeAppsRequest {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withOffset(offset: number): BatchListEdgeAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListEdgeAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAppType(appType: BatchListEdgeAppsRequestAppTypeEnum | string): BatchListEdgeAppsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: BatchListEdgeAppsRequestAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): BatchListEdgeAppsRequestAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withFunctionType(functionType: BatchListEdgeAppsRequestFunctionTypeEnum | string): BatchListEdgeAppsRequest {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: BatchListEdgeAppsRequestFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): BatchListEdgeAppsRequestFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListEdgeAppsRequestAppTypeEnum {
    SYSTEM_REQUIRED = 'SYSTEM_REQUIRED',
    SYSTEM_OPTIONAL = 'SYSTEM_OPTIONAL',
    USER = 'USER'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchListEdgeAppsRequestFunctionTypeEnum {
    DATA_PROCESSING = 'DATA_PROCESSING',
    PROTOCOL_PARSING = 'PROTOCOL_PARSING',
    ON_PREMISE_INTEGRATION = 'ON_PREMISE_INTEGRATION',
    GATEWAY_MANAGER = 'GATEWAY_MANAGER',
    COMPOSITE_APPLICATION = 'COMPOSITE_APPLICATION',
    DATA_COLLECTION = 'DATA_COLLECTION'
}
