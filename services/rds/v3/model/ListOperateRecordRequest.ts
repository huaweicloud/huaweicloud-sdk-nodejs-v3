import { ListOperateRecordRequestBody } from './ListOperateRecordRequestBody';


export class ListOperateRecordRequest {
    private 'instance_id'?: string;
    public body?: ListOperateRecordRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListOperateRecordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListOperateRecordRequestBody): ListOperateRecordRequest {
        this['body'] = body;
        return this;
    }
}