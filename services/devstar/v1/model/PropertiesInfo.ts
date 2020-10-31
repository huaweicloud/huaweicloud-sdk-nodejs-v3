

export class PropertiesInfo {
    public key?: string;
    public defaultValue?: string;
    public label?: string;
    public type?: string;
    public helpText?: string;
    public readOnly?: boolean;
    public required?: boolean;
    public regType?: string;
    public regPattern?: string;
    public regTip?: string;
    public isShow?: boolean;
    public constructor() { 
    }
    public withKey(key: string): PropertiesInfo {
        this['key'] = key;
        return this;
    }
    public withDefaultValue(defaultValue: string): PropertiesInfo {
        this['defaultValue'] = defaultValue;
        return this;
    }
    public withLabel(label: string): PropertiesInfo {
        this['label'] = label;
        return this;
    }
    public withType(type: string): PropertiesInfo {
        this['type'] = type;
        return this;
    }
    public withHelpText(helpText: string): PropertiesInfo {
        this['helpText'] = helpText;
        return this;
    }
    public withReadOnly(readOnly: boolean): PropertiesInfo {
        this['readOnly'] = readOnly;
        return this;
    }
    public withRequired(required: boolean): PropertiesInfo {
        this['required'] = required;
        return this;
    }
    public withRegType(regType: string): PropertiesInfo {
        this['regType'] = regType;
        return this;
    }
    public withRegPattern(regPattern: string): PropertiesInfo {
        this['regPattern'] = regPattern;
        return this;
    }
    public withRegTip(regTip: string): PropertiesInfo {
        this['regTip'] = regTip;
        return this;
    }
    public withIsShow(isShow: boolean): PropertiesInfo {
        this['isShow'] = isShow;
        return this;
    }
}