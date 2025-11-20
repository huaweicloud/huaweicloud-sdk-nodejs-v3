import { UpdateConnectionRequestBody } from './UpdateConnectionRequestBody';


export class UpdateConnectionRequest {
    private 'connection_id'?: string;
    private 'instance_id'?: string;
    public body?: UpdateConnectionRequestBody;
    public constructor(connectionId?: string, instanceId?: string) { 
        this['connection_id'] = connectionId;
        this['instance_id'] = instanceId;
    }
    public withConnectionId(connectionId: string): UpdateConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withInstanceId(instanceId: string): UpdateConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateConnectionRequestBody): UpdateConnectionRequest {
        this['body'] = body;
        return this;
    }
}