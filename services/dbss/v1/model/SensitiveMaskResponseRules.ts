

export class SensitiveMaskResponseRules {
    public id?: string;
    public name?: string;
    public type?: string;
    public regex?: string;
    private 'mask_value'?: string;
    public status?: string;
    private 'operate_time'?: string;
    public constructor() { 
    }
    public withId(id: string): SensitiveMaskResponseRules {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SensitiveMaskResponseRules {
        this['name'] = name;
        return this;
    }
    public withType(type: string): SensitiveMaskResponseRules {
        this['type'] = type;
        return this;
    }
    public withRegex(regex: string): SensitiveMaskResponseRules {
        this['regex'] = regex;
        return this;
    }
    public withMaskValue(maskValue: string): SensitiveMaskResponseRules {
        this['mask_value'] = maskValue;
        return this;
    }
    public set maskValue(maskValue: string  | undefined) {
        this['mask_value'] = maskValue;
    }
    public get maskValue(): string | undefined {
        return this['mask_value'];
    }
    public withStatus(status: string): SensitiveMaskResponseRules {
        this['status'] = status;
        return this;
    }
    public withOperateTime(operateTime: string): SensitiveMaskResponseRules {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
}