

export class WorkItemFlowFieldValueVO {
    private 'ref_prop'?: string;
    private 'setting_val_object'?: Array<{ [key: string]: object; }>;
    public constructor() { 
    }
    public withRefProp(refProp: string): WorkItemFlowFieldValueVO {
        this['ref_prop'] = refProp;
        return this;
    }
    public set refProp(refProp: string  | undefined) {
        this['ref_prop'] = refProp;
    }
    public get refProp(): string | undefined {
        return this['ref_prop'];
    }
    public withSettingValObject(settingValObject: Array<{ [key: string]: object; }>): WorkItemFlowFieldValueVO {
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