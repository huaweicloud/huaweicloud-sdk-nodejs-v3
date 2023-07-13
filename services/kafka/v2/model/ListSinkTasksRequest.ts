

export class ListSinkTasksRequest {
    private 'connector_id': string | undefined;
    public constructor(connectorId?: any) { 
        this['connector_id'] = connectorId;
    }
    public withConnectorId(connectorId: string): ListSinkTasksRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId() {
        return this['connector_id'];
    }
}