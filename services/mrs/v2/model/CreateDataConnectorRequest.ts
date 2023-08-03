import { DataConnectorReq } from './DataConnectorReq';


export class CreateDataConnectorRequest {
    public body?: DataConnectorReq;
    public constructor() { 
    }
    public withBody(body: DataConnectorReq): CreateDataConnectorRequest {
        this['body'] = body;
        return this;
    }
}