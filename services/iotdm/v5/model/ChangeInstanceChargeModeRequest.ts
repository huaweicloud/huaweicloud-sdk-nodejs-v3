import { ChangeInstanceChargeMode } from './ChangeInstanceChargeMode';


export class ChangeInstanceChargeModeRequest {
    private 'instance_id'?: string;
    public body?: ChangeInstanceChargeMode;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeInstanceChargeModeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangeInstanceChargeMode): ChangeInstanceChargeModeRequest {
        this['body'] = body;
        return this;
    }
}