import { RdsNoAgentDbRequest } from './RdsNoAgentDbRequest';


export class AddRdsNoAgentDatabaseRequest {
    private 'instance_id'?: string;
    public body?: RdsNoAgentDbRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddRdsNoAgentDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RdsNoAgentDbRequest): AddRdsNoAgentDatabaseRequest {
        this['body'] = body;
        return this;
    }
}