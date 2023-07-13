import { CreateSinkTaskReq } from './CreateSinkTaskReq';


export class CreateSinkTaskRequest {
    private 'connector_id': string | undefined;
    public body?: CreateSinkTaskReq;
    public constructor(connectorId?: any) { 
        this['connector_id'] = connectorId;
    }
    public withConnectorId(connectorId: string): CreateSinkTaskRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId() {
        return this['connector_id'];
    }
    public withBody(body: CreateSinkTaskReq): CreateSinkTaskRequest {
        this['body'] = body;
        return this;
    }
}