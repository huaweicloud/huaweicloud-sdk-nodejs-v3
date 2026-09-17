import { ShowDdsSlowLogTrendRequestBody } from './ShowDdsSlowLogTrendRequestBody';


export class ShowDdsSlowLogTrendRequest {
    private 'instance_id'?: string;
    public body?: ShowDdsSlowLogTrendRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowDdsSlowLogTrendRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ShowDdsSlowLogTrendRequestBody): ShowDdsSlowLogTrendRequest {
        this['body'] = body;
        return this;
    }
}