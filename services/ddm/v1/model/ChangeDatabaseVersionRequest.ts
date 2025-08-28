import { DatabaseVersionRequest } from './DatabaseVersionRequest';


export class ChangeDatabaseVersionRequest {
    private 'instance_id'?: string;
    public body?: DatabaseVersionRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeDatabaseVersionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DatabaseVersionRequest): ChangeDatabaseVersionRequest {
        this['body'] = body;
        return this;
    }
}