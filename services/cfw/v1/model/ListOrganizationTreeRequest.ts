

export class ListOrganizationTreeRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'parent_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(projectId?: string, fwInstanceId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withProjectId(projectId: string): ListOrganizationTreeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListOrganizationTreeRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withParentId(parentId: string): ListOrganizationTreeRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withLimit(limit: number): ListOrganizationTreeRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOrganizationTreeRequest {
        this['marker'] = marker;
        return this;
    }
}