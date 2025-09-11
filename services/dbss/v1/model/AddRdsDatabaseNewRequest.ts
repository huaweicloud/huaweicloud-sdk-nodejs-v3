import { RdsDbRequest } from './RdsDbRequest';


export class AddRdsDatabaseNewRequest {
    private 'instance_id'?: string;
    public body?: RdsDbRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddRdsDatabaseNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RdsDbRequest): AddRdsDatabaseNewRequest {
        this['body'] = body;
        return this;
    }
}