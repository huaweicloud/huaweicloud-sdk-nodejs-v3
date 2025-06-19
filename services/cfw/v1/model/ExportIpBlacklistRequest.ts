

export class ExportIpBlacklistRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public name?: string;
    public constructor(projectId?: string, fwInstanceId?: string, name?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['name'] = name;
    }
    public withProjectId(projectId: string): ExportIpBlacklistRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ExportIpBlacklistRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withName(name: string): ExportIpBlacklistRequest {
        this['name'] = name;
        return this;
    }
}