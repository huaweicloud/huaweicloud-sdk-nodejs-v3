import { BatchUpdateAntiTamperRulesRequestBody } from './BatchUpdateAntiTamperRulesRequestBody';


export class BatchUpdateAntitamperRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateAntiTamperRulesRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateAntitamperRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateAntiTamperRulesRequestBody): BatchUpdateAntitamperRulesRequest {
        this['body'] = body;
        return this;
    }
}