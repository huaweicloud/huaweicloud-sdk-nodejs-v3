

export class ReportGetReportsRequest {
    public name?: string;
    public page?: number;
    public size?: number;
    public constructor(page?: number, size?: number) { 
        this['page'] = page;
        this['size'] = size;
    }
    public withName(name: string): ReportGetReportsRequest {
        this['name'] = name;
        return this;
    }
    public withPage(page: number): ReportGetReportsRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ReportGetReportsRequest {
        this['size'] = size;
        return this;
    }
}