import { AddCopyDatabaseRequestBody } from './AddCopyDatabaseRequestBody';


export class CopyDatabaseRequest {
    private 'instance_id'?: string;
    public body?: AddCopyDatabaseRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CopyDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddCopyDatabaseRequestBody): CopyDatabaseRequest {
        this['body'] = body;
        return this;
    }
}