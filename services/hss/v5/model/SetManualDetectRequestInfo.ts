

export class SetManualDetectRequestInfo {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): SetManualDetectRequestInfo {
        this['type'] = type;
        return this;
    }
}