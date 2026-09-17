

export class ValidateDbDataReq {
    public type?: string;
    public data?: Array<string>;
    public constructor(type?: string, data?: Array<string>) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): ValidateDbDataReq {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<string>): ValidateDbDataReq {
        this['data'] = data;
        return this;
    }
}