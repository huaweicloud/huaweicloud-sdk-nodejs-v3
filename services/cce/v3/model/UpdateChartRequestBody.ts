

export class UpdateChartRequestBody {
    public parameters?: string;
    public content?: any;
    public constructor(content?: any) { 
        this['content'] = content;
    }
    public withParameters(parameters: string): UpdateChartRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withContent(content: any): UpdateChartRequestBody {
        this['content'] = content;
        return this;
    }
}