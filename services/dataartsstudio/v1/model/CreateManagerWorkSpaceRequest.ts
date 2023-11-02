import { CreateWorkspaceParams } from './CreateWorkspaceParams';


export class CreateManagerWorkSpaceRequest {
    private 'instance_id'?: string;
    public body?: CreateWorkspaceParams;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateManagerWorkSpaceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateWorkspaceParams): CreateManagerWorkSpaceRequest {
        this['body'] = body;
        return this;
    }
}