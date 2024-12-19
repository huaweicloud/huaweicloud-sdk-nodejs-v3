import { UpgradeMinorVersionRequestBody } from './UpgradeMinorVersionRequestBody';


export class UpgradeInstanceMinorVersionRequest {
    private 'instance_id'?: string;
    public body?: UpgradeMinorVersionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpgradeInstanceMinorVersionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpgradeMinorVersionRequestBody): UpgradeInstanceMinorVersionRequest {
        this['body'] = body;
        return this;
    }
}