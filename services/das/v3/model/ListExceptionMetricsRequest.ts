import { ListExceptionMetricsRequestBody } from './ListExceptionMetricsRequestBody';


export class ListExceptionMetricsRequest {
    private 'instance_id'?: string;
    public body?: ListExceptionMetricsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListExceptionMetricsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListExceptionMetricsRequestBody): ListExceptionMetricsRequest {
        this['body'] = body;
        return this;
    }
}