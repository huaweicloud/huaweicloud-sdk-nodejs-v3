import { ListLtsSlowLogsRequestBody } from './ListLtsSlowLogsRequestBody';


export class ListLtsSlowLogsRequest {
    private 'instance_id'?: string;
    public body?: ListLtsSlowLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListLtsSlowLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListLtsSlowLogsRequestBody): ListLtsSlowLogsRequest {
        this['body'] = body;
        return this;
    }
}