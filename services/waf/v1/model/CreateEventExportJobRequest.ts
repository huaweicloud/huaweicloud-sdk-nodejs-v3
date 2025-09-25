import { AsyncJobReqBody } from './AsyncJobReqBody';


export class CreateEventExportJobRequest {
    private 'Content-Type'?: string;
    public body?: AsyncJobReqBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateEventExportJobRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AsyncJobReqBody): CreateEventExportJobRequest {
        this['body'] = body;
        return this;
    }
}