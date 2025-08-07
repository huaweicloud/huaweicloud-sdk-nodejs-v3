

export class AntileakageMapResponseBodyLeakagemap {
    public sensitive?: Array<string>;
    public code?: Array<string>;
    public constructor() { 
    }
    public withSensitive(sensitive: Array<string>): AntileakageMapResponseBodyLeakagemap {
        this['sensitive'] = sensitive;
        return this;
    }
    public withCode(code: Array<string>): AntileakageMapResponseBodyLeakagemap {
        this['code'] = code;
        return this;
    }
}