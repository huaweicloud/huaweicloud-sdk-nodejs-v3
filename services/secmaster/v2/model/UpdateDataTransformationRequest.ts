import { UpdateDataTransformationRequestBody } from './UpdateDataTransformationRequestBody';


export class UpdateDataTransformationRequest {
    private 'workspace_id'?: string;
    private 'data_transformation_id'?: string;
    public body?: UpdateDataTransformationRequestBody;
    public constructor(workspaceId?: string, dataTransformationId?: string) { 
        this['workspace_id'] = workspaceId;
        this['data_transformation_id'] = dataTransformationId;
    }
    public withWorkspaceId(workspaceId: string): UpdateDataTransformationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataTransformationId(dataTransformationId: string): UpdateDataTransformationRequest {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
    public withBody(body: UpdateDataTransformationRequestBody): UpdateDataTransformationRequest {
        this['body'] = body;
        return this;
    }
}