import { ShowSlowLogStatisticsNewRequestBody } from './ShowSlowLogStatisticsNewRequestBody';


export class ShowSlowLogStatisticsNewRequest {
    private 'instance_id'?: string;
    public body?: ShowSlowLogStatisticsNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowSlowLogStatisticsNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ShowSlowLogStatisticsNewRequestBody): ShowSlowLogStatisticsNewRequest {
        this['body'] = body;
        return this;
    }
}