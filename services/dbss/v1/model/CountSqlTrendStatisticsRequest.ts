import { GeneralRequest } from './GeneralRequest';


export class CountSqlTrendStatisticsRequest {
    private 'instance_id'?: string;
    public body?: GeneralRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CountSqlTrendStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: GeneralRequest): CountSqlTrendStatisticsRequest {
        this['body'] = body;
        return this;
    }
}