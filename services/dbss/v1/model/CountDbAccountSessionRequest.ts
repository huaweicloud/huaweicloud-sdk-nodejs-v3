import { SqlSessionStatisticsRequest } from './SqlSessionStatisticsRequest';


export class CountDbAccountSessionRequest {
    private 'instance_id'?: string;
    public body?: SqlSessionStatisticsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CountDbAccountSessionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SqlSessionStatisticsRequest): CountDbAccountSessionRequest {
        this['body'] = body;
        return this;
    }
}