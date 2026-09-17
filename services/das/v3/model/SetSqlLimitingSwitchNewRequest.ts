import { SetSqlLimitingSwitchNewRequestBody } from './SetSqlLimitingSwitchNewRequestBody';


export class SetSqlLimitingSwitchNewRequest {
    private 'instance_id'?: string;
    public body?: SetSqlLimitingSwitchNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetSqlLimitingSwitchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetSqlLimitingSwitchNewRequestBody): SetSqlLimitingSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}