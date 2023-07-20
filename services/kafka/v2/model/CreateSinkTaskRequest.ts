import { CreateSinkTaskReq } from './CreateSinkTaskReq';


export class CreateSinkTaskRequest {
    private 'connector_id'?: string;
    public body?: CreateSinkTaskReq;
    public constructor(connectorId?: string) { 
        this['connector_id'] = connectorId;
    }
    public withConnectorId(connectorId: string): CreateSinkTaskRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withBody(body: CreateSinkTaskReq): CreateSinkTaskRequest {
        this['body'] = body;
        return this;
    }
}