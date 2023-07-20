import { ConnectorOrderRequestBody } from './ConnectorOrderRequestBody';


export class CreateDeleteConnectorOrderRequest {
    private 'instance_id'?: string;
    public body?: ConnectorOrderRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDeleteConnectorOrderRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ConnectorOrderRequestBody): CreateDeleteConnectorOrderRequest {
        this['body'] = body;
        return this;
    }
}