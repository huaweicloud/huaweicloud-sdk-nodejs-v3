import { UpgradeInstanceReq } from './UpgradeInstanceReq';


export class UpgradeInstanceRequest {
    private 'instance_id'?: string;
    public body?: UpgradeInstanceReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpgradeInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpgradeInstanceReq): UpgradeInstanceRequest {
        this['body'] = body;
        return this;
    }
}