import { UpdateArchiveRuleReqBody } from './UpdateArchiveRuleReqBody';


export class UpdateArchiveRuleRequest {
    private 'analyzer_id'?: string;
    private 'archive_rule_id'?: string;
    public body?: UpdateArchiveRuleReqBody;
    public constructor(analyzerId?: string, archiveRuleId?: string) { 
        this['analyzer_id'] = analyzerId;
        this['archive_rule_id'] = archiveRuleId;
    }
    public withAnalyzerId(analyzerId: string): UpdateArchiveRuleRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withArchiveRuleId(archiveRuleId: string): UpdateArchiveRuleRequest {
        this['archive_rule_id'] = archiveRuleId;
        return this;
    }
    public set archiveRuleId(archiveRuleId: string  | undefined) {
        this['archive_rule_id'] = archiveRuleId;
    }
    public get archiveRuleId(): string | undefined {
        return this['archive_rule_id'];
    }
    public withBody(body: UpdateArchiveRuleReqBody): UpdateArchiveRuleRequest {
        this['body'] = body;
        return this;
    }
}