import { BatchUpdateGeoipRulesRequestBody } from './BatchUpdateGeoipRulesRequestBody';


export class BatchUpdateGeoipRulesRequest {
    private 'Content-Type'?: string;
    public body?: BatchUpdateGeoipRulesRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateGeoipRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateGeoipRulesRequestBody): BatchUpdateGeoipRulesRequest {
        this['body'] = body;
        return this;
    }
}