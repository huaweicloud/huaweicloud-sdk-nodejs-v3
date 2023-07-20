

export class ListWatermarkTemplateRequest {
    private 'X-Sdk-Date'?: string;
    public id?: Array<string>;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ListWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withId(id: Array<string>): ListWatermarkTemplateRequest {
        this['id'] = id;
        return this;
    }
    public withPage(page: number): ListWatermarkTemplateRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListWatermarkTemplateRequest {
        this['size'] = size;
        return this;
    }
}