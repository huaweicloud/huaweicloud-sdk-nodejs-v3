

export class CreateEdgeApplicationRequestDTO {
    private 'edge_app_id'?: string;
    private 'edge_app_name'?: string;
    public description?: string;
    private 'function_type'?: CreateEdgeApplicationRequestDTOFunctionTypeEnum | string;
    public protocol?: string;
    public constructor(edgeAppId?: string) { 
        this['edge_app_id'] = edgeAppId;
    }
    public withEdgeAppId(edgeAppId: string): CreateEdgeApplicationRequestDTO {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withEdgeAppName(edgeAppName: string): CreateEdgeApplicationRequestDTO {
        this['edge_app_name'] = edgeAppName;
        return this;
    }
    public set edgeAppName(edgeAppName: string  | undefined) {
        this['edge_app_name'] = edgeAppName;
    }
    public get edgeAppName(): string | undefined {
        return this['edge_app_name'];
    }
    public withDescription(description: string): CreateEdgeApplicationRequestDTO {
        this['description'] = description;
        return this;
    }
    public withFunctionType(functionType: CreateEdgeApplicationRequestDTOFunctionTypeEnum | string): CreateEdgeApplicationRequestDTO {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: CreateEdgeApplicationRequestDTOFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): CreateEdgeApplicationRequestDTOFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
    public withProtocol(protocol: string): CreateEdgeApplicationRequestDTO {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEdgeApplicationRequestDTOFunctionTypeEnum {
    DATA_PROCESSING = 'DATA_PROCESSING',
    PROTOCOL_PARSING = 'PROTOCOL_PARSING',
    ON_PREMISE_INTEGRATION = 'ON_PREMISE_INTEGRATION',
    GATEWAY_MANAGER = 'GATEWAY_MANAGER',
    COMPOSITE_APPLICATION = 'COMPOSITE_APPLICATION',
    DATA_COLLECTION = 'DATA_COLLECTION'
}
