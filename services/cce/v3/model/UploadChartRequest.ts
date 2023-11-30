import { UploadChartRequestBody } from './UploadChartRequestBody';


export class UploadChartRequest {
    private 'Content-Type'?: string;
    public body?: UploadChartRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UploadChartRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UploadChartRequestBody): UploadChartRequest {
        this['body'] = body;
        return this;
    }
}