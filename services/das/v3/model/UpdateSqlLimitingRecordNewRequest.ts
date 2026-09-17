import { UpdateSqlLimitingRecordNewRequestBody } from './UpdateSqlLimitingRecordNewRequestBody';


export class UpdateSqlLimitingRecordNewRequest {
    private 'instance_id'?: string;
    public body?: UpdateSqlLimitingRecordNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateSqlLimitingRecordNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateSqlLimitingRecordNewRequestBody): UpdateSqlLimitingRecordNewRequest {
        this['body'] = body;
        return this;
    }
}