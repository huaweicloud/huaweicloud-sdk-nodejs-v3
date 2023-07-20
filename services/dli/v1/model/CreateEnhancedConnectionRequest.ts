import { CreateEnhancedConnectionsReq } from './CreateEnhancedConnectionsReq';


export class CreateEnhancedConnectionRequest {
    public body?: CreateEnhancedConnectionsReq;
    public constructor() { 
    }
    public withBody(body: CreateEnhancedConnectionsReq): CreateEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}