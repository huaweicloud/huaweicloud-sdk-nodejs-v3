import { ConnectorOrderRequestBody } from './ConnectorOrderRequestBody';


export class CreateDeleteConnectorOrderRequest {
    private 'instance_id': string | undefined;
    public body?: ConnectorOrderRequestBody;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDeleteConnectorOrderRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ConnectorOrderRequestBody): CreateDeleteConnectorOrderRequest {
        this['body'] = body;
        return this;
    }
}