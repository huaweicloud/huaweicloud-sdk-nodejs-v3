

export class ListAssetCategoryRequest {
    private 'X-Sdk-Date'?: string;
    public id?: number;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withXSdkDate(xSdkDate: string): ListAssetCategoryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withId(id: number): ListAssetCategoryRequest {
        this['id'] = id;
        return this;
    }
}