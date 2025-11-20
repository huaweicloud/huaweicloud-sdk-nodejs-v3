import { UpdateAnalyzerReqBody } from './UpdateAnalyzerReqBody';


export class UpdateAnalyzerRequest {
    private 'analyzer_id'?: string;
    public body?: UpdateAnalyzerReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): UpdateAnalyzerRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: UpdateAnalyzerReqBody): UpdateAnalyzerRequest {
        this['body'] = body;
        return this;
    }
}