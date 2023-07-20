import { ModifyIpWhitelistBody } from './ModifyIpWhitelistBody';


export class UpdateIpWhitelistRequest {
    private 'instance_id'?: string;
    public body?: ModifyIpWhitelistBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateIpWhitelistRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyIpWhitelistBody): UpdateIpWhitelistRequest {
        this['body'] = body;
        return this;
    }
}