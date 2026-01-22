

export class ShowConfigQuotaRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'config_type'?: string;
    private 'set_id'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, configType?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['config_type'] = configType;
    }
    public withProjectId(projectId: string): ShowConfigQuotaRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowConfigQuotaRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withConfigType(configType: string): ShowConfigQuotaRequest {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: string  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): string | undefined {
        return this['config_type'];
    }
    public withSetId(setId: string): ShowConfigQuotaRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
}