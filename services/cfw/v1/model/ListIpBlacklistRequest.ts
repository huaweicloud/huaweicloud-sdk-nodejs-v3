

export class ListIpBlacklistRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string, fwInstanceId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListIpBlacklistRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListIpBlacklistRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): ListIpBlacklistRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListIpBlacklistRequest {
        this['offset'] = offset;
        return this;
    }
}