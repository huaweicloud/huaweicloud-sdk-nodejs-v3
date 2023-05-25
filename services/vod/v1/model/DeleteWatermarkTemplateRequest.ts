

export class DeleteWatermarkTemplateRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withXSdkDate(xSdkDate: string): DeleteWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withId(id: string): DeleteWatermarkTemplateRequest {
        this['id'] = id;
        return this;
    }
}