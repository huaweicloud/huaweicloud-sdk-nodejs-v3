import { ExecuteCommandRequestBody } from './ExecuteCommandRequestBody';


export class ExecuteCommandMobilizationRequest {
    private 'instance_id'?: string;
    public body?: ExecuteCommandRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExecuteCommandMobilizationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExecuteCommandRequestBody): ExecuteCommandMobilizationRequest {
        this['body'] = body;
        return this;
    }
}