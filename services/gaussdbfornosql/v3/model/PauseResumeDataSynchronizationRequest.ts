import { ActionBody } from './ActionBody';


export class PauseResumeDataSynchronizationRequest {
    private 'instance_id'?: string;
    public body?: ActionBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): PauseResumeDataSynchronizationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ActionBody): PauseResumeDataSynchronizationRequest {
        this['body'] = body;
        return this;
    }
}