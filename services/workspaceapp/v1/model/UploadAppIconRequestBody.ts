

export class UploadAppIconRequestBody {
    public data?: any;
    public constructor(data?: any) { 
        this['data'] = data;
    }
    public withData(data: any): UploadAppIconRequestBody {
        this['data'] = data;
        return this;
    }
}