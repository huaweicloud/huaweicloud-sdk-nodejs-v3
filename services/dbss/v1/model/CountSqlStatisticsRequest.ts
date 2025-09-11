import { GeneralRequest } from './GeneralRequest';


export class CountSqlStatisticsRequest {
    private 'instance_id'?: string;
    public body?: GeneralRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CountSqlStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: GeneralRequest): CountSqlStatisticsRequest {
        this['body'] = body;
        return this;
    }
}