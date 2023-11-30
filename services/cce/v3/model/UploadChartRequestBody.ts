

export class UploadChartRequestBody {
    public parameters?: string;
    public content?: any;
    public constructor(content?: any) { 
        this['content'] = content;
    }
    public withParameters(parameters: string): UploadChartRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withContent(content: any): UploadChartRequestBody {
        this['content'] = content;
        return this;
    }
}