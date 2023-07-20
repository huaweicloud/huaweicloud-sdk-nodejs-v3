import { PrecheckDisasterRecoveryOperationBody } from './PrecheckDisasterRecoveryOperationBody';


export class CheckDisasterRecoveryOperationRequest {
    private 'instance_id'?: string;
    public body?: PrecheckDisasterRecoveryOperationBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CheckDisasterRecoveryOperationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PrecheckDisasterRecoveryOperationBody): CheckDisasterRecoveryOperationRequest {
        this['body'] = body;
        return this;
    }
}