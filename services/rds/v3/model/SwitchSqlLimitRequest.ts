import { SwitchSqlLimitControlReqV3 } from './SwitchSqlLimitControlReqV3';


export class SwitchSqlLimitRequest {
    private 'instance_id'?: string;
    public body?: SwitchSqlLimitControlReqV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchSqlLimitRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchSqlLimitControlReqV3): SwitchSqlLimitRequest {
        this['body'] = body;
        return this;
    }
}