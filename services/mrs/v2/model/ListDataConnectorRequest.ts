

export class ListDataConnectorRequest {
    private 'connector_id'?: string;
    private 'source_type'?: string;
    private 'connector_name'?: string;
    public limit?: number;
    public offset?: number;
    public available?: boolean;
    public constructor() { 
    }
    public withConnectorId(connectorId: string): ListDataConnectorRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withSourceType(sourceType: string): ListDataConnectorRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withConnectorName(connectorName: string): ListDataConnectorRequest {
        this['connector_name'] = connectorName;
        return this;
    }
    public set connectorName(connectorName: string  | undefined) {
        this['connector_name'] = connectorName;
    }
    public get connectorName(): string | undefined {
        return this['connector_name'];
    }
    public withLimit(limit: number): ListDataConnectorRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataConnectorRequest {
        this['offset'] = offset;
        return this;
    }
    public withAvailable(available: boolean): ListDataConnectorRequest {
        this['available'] = available;
        return this;
    }
}