import { BatchUpdateCcRulesRequestBody } from './BatchUpdateCcRulesRequestBody';


export class BatchUpdateCcRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateCcRulesRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateCcRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateCcRulesRequestBody): BatchUpdateCcRulesRequest {
        this['body'] = body;
        return this;
    }
}