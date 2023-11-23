import { ListLtsErrorLogsRequestBody } from './ListLtsErrorLogsRequestBody';


export class ListLtsErrorLogsRequest {
    private 'instance_id'?: string;
    public body?: ListLtsErrorLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListLtsErrorLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListLtsErrorLogsRequestBody): ListLtsErrorLogsRequest {
        this['body'] = body;
        return this;
    }
}