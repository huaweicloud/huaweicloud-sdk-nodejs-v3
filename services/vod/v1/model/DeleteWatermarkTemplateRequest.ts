

export class DeleteWatermarkTemplateRequest {
    private 'X-Sdk-Date'?: string;
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withXSdkDate(xSdkDate: string): DeleteWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withId(id: string): DeleteWatermarkTemplateRequest {
        this['id'] = id;
        return this;
    }
}