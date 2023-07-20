import { ConstructDisasterRecoveryBody } from './ConstructDisasterRecoveryBody';


export class CreateDisasterRecoveryRequest {
    private 'instance_id'?: string;
    public body?: ConstructDisasterRecoveryBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDisasterRecoveryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ConstructDisasterRecoveryBody): CreateDisasterRecoveryRequest {
        this['body'] = body;
        return this;
    }
}