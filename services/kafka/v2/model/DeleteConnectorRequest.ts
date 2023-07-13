import { DeleteConnectorRequestBody } from './DeleteConnectorRequestBody';


export class DeleteConnectorRequest {
    private 'instance_id': string | undefined;
    public body?: DeleteConnectorRequestBody;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteConnectorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: DeleteConnectorRequestBody): DeleteConnectorRequest {
        this['body'] = body;
        return this;
    }
}