

export class DeleteDataConnectorRequest {
    private 'connector_id'?: string;
    public constructor(connectorId?: string) { 
        this['connector_id'] = connectorId;
    }
    public withConnectorId(connectorId: string): DeleteDataConnectorRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
}