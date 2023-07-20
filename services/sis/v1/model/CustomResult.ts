

export class CustomResult {
    public data?: string;
    public constructor(data?: string) { 
        this['data'] = data;
    }
    public withData(data: string): CustomResult {
        this['data'] = data;
        return this;
    }
}