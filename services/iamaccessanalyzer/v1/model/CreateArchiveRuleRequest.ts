import { CreateArchiveRuleReqBody } from './CreateArchiveRuleReqBody';


export class CreateArchiveRuleRequest {
    private 'analyzer_id'?: string;
    public body?: CreateArchiveRuleReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): CreateArchiveRuleRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: CreateArchiveRuleReqBody): CreateArchiveRuleRequest {
        this['body'] = body;
        return this;
    }
}