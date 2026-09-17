

export class WorkItemFlowFieldRangeVO {
    private 'setting_val_object'?: Array<{ [key: string]: object; }>;
    public constructor() { 
    }
    public withSettingValObject(settingValObject: Array<{ [key: string]: object; }>): WorkItemFlowFieldRangeVO {
        this['setting_val_object'] = settingValObject;
        return this;
    }
    public set settingValObject(settingValObject: Array<{ [key: string]: object; }>  | undefined) {
        this['setting_val_object'] = settingValObject;
    }
    public get settingValObject(): Array<{ [key: string]: object; }> | undefined {
        return this['setting_val_object'];
    }
}