import { GeneralRequest } from './GeneralRequest';


export class CountInjectionStatisticsRequest {
    private 'instance_id'?: string;
    public body?: GeneralRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CountInjectionStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: GeneralRequest): CountInjectionStatisticsRequest {
        this['body'] = body;
        return this;
    }
}