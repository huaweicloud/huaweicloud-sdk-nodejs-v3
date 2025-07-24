

export class ShowDisclaimerRecordRequest {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): ShowDisclaimerRecordRequest {
        this['type'] = type;
        return this;
    }
}