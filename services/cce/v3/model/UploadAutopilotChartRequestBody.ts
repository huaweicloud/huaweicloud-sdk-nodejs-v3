

export class UploadAutopilotChartRequestBody {
    public parameters?: string;
    public content?: any;
    public constructor(content?: any) { 
        this['content'] = content;
    }
    public withParameters(parameters: string): UploadAutopilotChartRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withContent(content: any): UploadAutopilotChartRequestBody {
        this['content'] = content;
        return this;
    }
}