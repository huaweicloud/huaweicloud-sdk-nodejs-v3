import { CompareSlowLogTemplatesRequestBody } from './CompareSlowLogTemplatesRequestBody';


export class CompareSlowLogTemplatesRequest {
    private 'instance_id'?: string;
    public body?: CompareSlowLogTemplatesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CompareSlowLogTemplatesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CompareSlowLogTemplatesRequestBody): CompareSlowLogTemplatesRequest {
        this['body'] = body;
        return this;
    }
}