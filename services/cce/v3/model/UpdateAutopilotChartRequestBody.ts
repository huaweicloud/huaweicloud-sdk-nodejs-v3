

export class UpdateAutopilotChartRequestBody {
    public parameters?: string;
    public content?: any;
    public constructor(content?: any) { 
        this['content'] = content;
    }
    public withParameters(parameters: string): UpdateAutopilotChartRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withContent(content: any): UpdateAutopilotChartRequestBody {
        this['content'] = content;
        return this;
    }
}