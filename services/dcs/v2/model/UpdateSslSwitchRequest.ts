import { UpdateSSLSwitchRequestBody } from './UpdateSSLSwitchRequestBody';


export class UpdateSslSwitchRequest {
    private 'instance_id'?: string;
    public body?: UpdateSSLSwitchRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateSslSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateSSLSwitchRequestBody): UpdateSslSwitchRequest {
        this['body'] = body;
        return this;
    }
}