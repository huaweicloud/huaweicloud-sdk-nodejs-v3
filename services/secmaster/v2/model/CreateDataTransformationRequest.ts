import { CreateDataTransformationRequestBody } from './CreateDataTransformationRequestBody';


export class CreateDataTransformationRequest {
    private 'workspace_id'?: string;
    public body?: CreateDataTransformationRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateDataTransformationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateDataTransformationRequestBody): CreateDataTransformationRequest {
        this['body'] = body;
        return this;
    }
}