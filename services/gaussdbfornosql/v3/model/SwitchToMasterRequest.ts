import { SwitchToMasterDisasterRecoveryBody } from './SwitchToMasterDisasterRecoveryBody';


export class SwitchToMasterRequest {
    private 'instance_id'?: string;
    public body?: SwitchToMasterDisasterRecoveryBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchToMasterRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchToMasterDisasterRecoveryBody): SwitchToMasterRequest {
        this['body'] = body;
        return this;
    }
}