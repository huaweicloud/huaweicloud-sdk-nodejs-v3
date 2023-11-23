

export class ShowCloudTypeRequest {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): ShowCloudTypeRequest {
        this['type'] = type;
        return this;
    }
}