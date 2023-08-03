import { DataConnectorReq } from './DataConnectorReq';


export class UpdateDataConnectorRequest {
    private 'connector_id'?: string;
    public body?: DataConnectorReq;
    public constructor(connectorId?: string) { 
        this['connector_id'] = connectorId;
    }
    public withConnectorId(connectorId: string): UpdateDataConnectorRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withBody(body: DataConnectorReq): UpdateDataConnectorRequest {
        this['body'] = body;
        return this;
    }
}