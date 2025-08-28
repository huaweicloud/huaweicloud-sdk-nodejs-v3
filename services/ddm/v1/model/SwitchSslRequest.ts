import { SwitchSslOpenRequest } from './SwitchSslOpenRequest';


export class SwitchSslRequest {
    private 'instance_id'?: string;
    public body?: SwitchSslOpenRequest;
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
    public withBody(body: SwitchSslOpenRequest): SwitchSslRequest {
        this['body'] = body;
        return this;
    }
}