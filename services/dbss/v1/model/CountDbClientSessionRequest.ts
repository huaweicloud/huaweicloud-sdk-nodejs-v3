import { SqlSessionStatisticsRequest } from './SqlSessionStatisticsRequest';


export class CountDbClientSessionRequest {
    private 'instance_id'?: string;
    public body?: SqlSessionStatisticsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CountDbClientSessionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SqlSessionStatisticsRequest): CountDbClientSessionRequest {
        this['body'] = body;
        return this;
    }
}