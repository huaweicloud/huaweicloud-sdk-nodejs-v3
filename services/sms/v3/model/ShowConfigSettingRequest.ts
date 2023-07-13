

export class ShowConfigSettingRequest {
    private 'task_id': string | undefined;
    private 'config_key'?: string | undefined;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowConfigSettingRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withConfigKey(configKey: string): ShowConfigSettingRequest {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: string | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey() {
        return this['config_key'];
    }
}