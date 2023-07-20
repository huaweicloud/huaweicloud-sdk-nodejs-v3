import { SwitchSslRequestBody } from './SwitchSslRequestBody';


export class SwitchSslRequest {
    private 'instance_id'?: string;
    public body?: SwitchSslRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchSslRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchSslRequestBody): SwitchSslRequest {
        this['body'] = body;
        return this;
    }
}