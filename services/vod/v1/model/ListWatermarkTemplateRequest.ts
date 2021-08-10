

export class ListWatermarkTemplateRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public id?: Array<string>;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListWatermarkTemplateRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListWatermarkTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
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