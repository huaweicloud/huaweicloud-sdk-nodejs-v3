

export class CustomResult {
    public data: string;
    public constructor(data?: any) { 
        this['data'] = data;
    }
    public withData(data: string): CustomResult {
        this['data'] = data;
        return this;
    }
}