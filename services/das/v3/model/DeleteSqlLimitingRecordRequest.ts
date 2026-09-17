import { DeleteSqlLimitingRecordRequestBody } from './DeleteSqlLimitingRecordRequestBody';


export class DeleteSqlLimitingRecordRequest {
    private 'instance_id'?: string;
    public body?: DeleteSqlLimitingRecordRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteSqlLimitingRecordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteSqlLimitingRecordRequestBody): DeleteSqlLimitingRecordRequest {
        this['body'] = body;
        return this;
    }
}