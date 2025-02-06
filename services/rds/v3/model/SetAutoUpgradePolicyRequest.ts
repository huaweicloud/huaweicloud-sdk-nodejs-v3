import { CustomerModifyAutoUpgradePolicyReq } from './CustomerModifyAutoUpgradePolicyReq';


export class SetAutoUpgradePolicyRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: CustomerModifyAutoUpgradePolicyReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetAutoUpgradePolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): SetAutoUpgradePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CustomerModifyAutoUpgradePolicyReq): SetAutoUpgradePolicyRequest {
        this['body'] = body;
        return this;
    }
}