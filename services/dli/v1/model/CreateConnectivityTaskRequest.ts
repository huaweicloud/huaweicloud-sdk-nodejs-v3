import { VerityConnectivityReq } from './VerityConnectivityReq';


export class CreateConnectivityTaskRequest {
    private 'queue_name'?: string;
    public body?: VerityConnectivityReq;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): CreateConnectivityTaskRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: VerityConnectivityReq): CreateConnectivityTaskRequest {
        this['body'] = body;
        return this;
    }
}