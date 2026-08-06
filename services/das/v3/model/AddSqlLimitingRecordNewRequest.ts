import { AddSqlLimitingRecordNewRequestBody } from './AddSqlLimitingRecordNewRequestBody';


export class AddSqlLimitingRecordNewRequest {
    private 'instance_id'?: string;
    public body?: AddSqlLimitingRecordNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddSqlLimitingRecordNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddSqlLimitingRecordNewRequestBody): AddSqlLimitingRecordNewRequest {
        this['body'] = body;
        return this;
    }
}