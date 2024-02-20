

export class DeleteArchiveRuleRequest {
    private 'analyzer_id'?: string;
    private 'archive_rule_id'?: string;
    public constructor(analyzerId?: string, archiveRuleId?: string) { 
        this['analyzer_id'] = analyzerId;
        this['archive_rule_id'] = archiveRuleId;
    }
    public withAnalyzerId(analyzerId: string): DeleteArchiveRuleRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withArchiveRuleId(archiveRuleId: string): DeleteArchiveRuleRequest {
        this['archive_rule_id'] = archiveRuleId;
        return this;
    }
    public set archiveRuleId(archiveRuleId: string  | undefined) {
        this['archive_rule_id'] = archiveRuleId;
    }
    public get archiveRuleId(): string | undefined {
        return this['archive_rule_id'];
    }
}