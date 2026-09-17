import { SetRapidGrowthThresholdNewRequestBody } from './SetRapidGrowthThresholdNewRequestBody';


export class SetRapidGrowthThresholdNewRequest {
    private 'instance_id'?: string;
    public body?: SetRapidGrowthThresholdNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetRapidGrowthThresholdNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetRapidGrowthThresholdNewRequestBody): SetRapidGrowthThresholdNewRequest {
        this['body'] = body;
        return this;
    }
}