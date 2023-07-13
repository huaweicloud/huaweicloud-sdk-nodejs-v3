import { CreateConnectorReq } from './CreateConnectorReq';


export class CreateConnectorRequest {
    private 'instance_id': string | undefined;
    public body?: CreateConnectorReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateConnectorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: CreateConnectorReq): CreateConnectorRequest {
        this['body'] = body;
        return this;
    }
}