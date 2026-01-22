

export class ShowExportStatusRequest {
    private 'object_id'?: string;
    private 'project_id'?: string;
    public constructor(objectId?: string, projectId?: string) { 
        this['object_id'] = objectId;
        this['project_id'] = projectId;
    }
    public withObjectId(objectId: string): ShowExportStatusRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withProjectId(projectId: string): ShowExportStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}