import { CreateDistributionRequestBody } from './CreateDistributionRequestBody';


export class CreateDistributionRequest {
    private 'instance_id'?: string;
    public body?: CreateDistributionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDistributionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDistributionRequestBody): CreateDistributionRequest {
        this['body'] = body;
        return this;
    }
}