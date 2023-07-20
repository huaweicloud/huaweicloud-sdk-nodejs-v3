

export class ShowConfigSettingRequest {
    private 'task_id'?: string;
    private 'config_key'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowConfigSettingRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withConfigKey(configKey: string): ShowConfigSettingRequest {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: string  | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey(): string | undefined {
        return this['config_key'];
    }
}