import { MoveTmlogsRequest } from './MoveTmlogsRequest';


export class MoveTmlogFilesRequest {
    private 'instance_id'?: string;
    public body?: MoveTmlogsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): MoveTmlogFilesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MoveTmlogsRequest): MoveTmlogFilesRequest {
        this['body'] = body;
        return this;
    }
}