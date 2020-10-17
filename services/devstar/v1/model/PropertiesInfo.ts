

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
    public withKey(key?: string): PropertiesInfo {
        this.key = key;
        return this;
    }
    public withDefaultValue(defaultValue?: string): PropertiesInfo {
        this.defaultValue = defaultValue;
        return this;
    }
    public withLabel(label?: string): PropertiesInfo {
        this.label = label;
        return this;
    }
    public withType(type?: string): PropertiesInfo {
        this.type = type;
        return this;
    }
    public withHelpText(helpText?: string): PropertiesInfo {
        this.helpText = helpText;
        return this;
    }
    public withReadOnly(readOnly?: boolean): PropertiesInfo {
        this.readOnly = readOnly;
        return this;
    }
    public withRequired(required?: boolean): PropertiesInfo {
        this.required = required;
        return this;
    }
    public withRegType(regType?: string): PropertiesInfo {
        this.regType = regType;
        return this;
    }
    public withRegPattern(regPattern?: string): PropertiesInfo {
        this.regPattern = regPattern;
        return this;
    }
    public withRegTip(regTip?: string): PropertiesInfo {
        this.regTip = regTip;
        return this;
    }
    public withIsShow(isShow?: boolean): PropertiesInfo {
        this.isShow = isShow;
        return this;
    }
    public getParseParam() {
        const parseParam = new PropertiesInfoParse();
        if(this.key !== null && this.key !== undefined) { 
            parseParam.setKey(this.key);
        }
        if(this.defaultValue !== null && this.defaultValue !== undefined) { 
            parseParam.setDefaultValue(this.defaultValue);
        }
        if(this.label !== null && this.label !== undefined) { 
            parseParam.setLabel(this.label);
        }
        if(this.type !== null && this.type !== undefined) { 
            parseParam.setType(this.type);
        }
        if(this.helpText !== null && this.helpText !== undefined) { 
            parseParam.setHelpText(this.helpText);
        }
        if(this.readOnly !== null && this.readOnly !== undefined) { 
            parseParam.setReadOnly(this.readOnly);
        }
        if(this.required !== null && this.required !== undefined) { 
            parseParam.setRequired(this.required);
        }
        if(this.regType !== null && this.regType !== undefined) { 
            parseParam.setRegType(this.regType);
        }
        if(this.regPattern !== null && this.regPattern !== undefined) { 
            parseParam.setRegPattern(this.regPattern);
        }
        if(this.regTip !== null && this.regTip !== undefined) { 
            parseParam.setRegTip(this.regTip);
        }
        if(this.isShow !== null && this.isShow !== undefined) { 
            parseParam.setIsShow(this.isShow);
        }
        return parseParam;
    }
}

export class PropertiesInfoParse {
    private 'key'?: any;
    private 'defaultValue'?: any;
    private 'label'?: any;
    private 'type'?: any;
    private 'helpText'?: any;
    private 'readOnly'?: any;
    private 'required'?: any;
    private 'regType'?: any;
    private 'regPattern'?: any;
    private 'regTip'?: any;
    private 'isShow'?: any;

    public setKey(key?: any) {
        this['key'] = key;
    }
    public setDefaultValue(defaultValue?: any) {
        this['defaultValue'] = defaultValue;
    }
    public setLabel(label?: any) {
        this['label'] = label;
    }
    public setType(type?: any) {
        this['type'] = type;
    }
    public setHelpText(helpText?: any) {
        this['helpText'] = helpText;
    }
    public setReadOnly(readOnly?: any) {
        this['readOnly'] = readOnly;
    }
    public setRequired(required?: any) {
        this['required'] = required;
    }
    public setRegType(regType?: any) {
        this['regType'] = regType;
    }
    public setRegPattern(regPattern?: any) {
        this['regPattern'] = regPattern;
    }
    public setRegTip(regTip?: any) {
        this['regTip'] = regTip;
    }
    public setIsShow(isShow?: any) {
        this['isShow'] = isShow;
    }
}