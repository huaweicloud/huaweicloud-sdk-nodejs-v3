import { UploadAutopilotChartRequestBody } from './UploadAutopilotChartRequestBody';


export class UploadAutopilotChartRequest {
    private 'Content-Type'?: string;
    public body?: UploadAutopilotChartRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UploadAutopilotChartRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UploadAutopilotChartRequestBody): UploadAutopilotChartRequest {
        this['body'] = body;
        return this;
    }
}