import { ListRemoteDbRequestBody } from './ListRemoteDbRequestBody';


export class ListRemoteDbRequest {
    private 'instance_id'?: string;
    public body?: ListRemoteDbRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListRemoteDbRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListRemoteDbRequestBody): ListRemoteDbRequest {
        this['body'] = body;
        return this;
    }
}