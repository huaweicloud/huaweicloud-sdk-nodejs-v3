

export class DeleteIpRequestBody {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): DeleteIpRequestBody {
        this['type'] = type;
        return this;
    }
}