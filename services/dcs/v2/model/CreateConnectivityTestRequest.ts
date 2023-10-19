import { CreateConnectivityTestRequestBody } from './CreateConnectivityTestRequestBody';


export class CreateConnectivityTestRequest {
    private 'instance_id'?: string;
    public body?: CreateConnectivityTestRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateConnectivityTestRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateConnectivityTestRequestBody): CreateConnectivityTestRequest {
        this['body'] = body;
        return this;
    }
}