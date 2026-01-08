

export class ListCategoryInfoRequest {
    private 'X-Sdk-Date'?: string;
    public id?: Array<number>;
    public constructor(id?: Array<number>) { 
        this['id'] = id;
    }
    public withXSdkDate(xSdkDate: string): ListCategoryInfoRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withId(id: Array<number>): ListCategoryInfoRequest {
        this['id'] = id;
        return this;
    }
}