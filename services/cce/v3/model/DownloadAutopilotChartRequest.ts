

export class DownloadAutopilotChartRequest {
    private 'chart_id'?: string;
    private 'Content-Type'?: string;
    public constructor(chartId?: string, contentType?: string) { 
        this['chart_id'] = chartId;
        this['Content-Type'] = contentType;
    }
    public withChartId(chartId: string): DownloadAutopilotChartRequest {
        this['chart_id'] = chartId;
        return this;
    }
    public set chartId(chartId: string  | undefined) {
        this['chart_id'] = chartId;
    }
    public get chartId(): string | undefined {
        return this['chart_id'];
    }
    public withContentType(contentType: string): DownloadAutopilotChartRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}