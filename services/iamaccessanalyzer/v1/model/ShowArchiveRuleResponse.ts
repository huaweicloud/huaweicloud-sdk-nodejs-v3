import { ArchiveRuleSummary } from './ArchiveRuleSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowArchiveRuleResponse extends SdkResponse {
    private 'archive_rule'?: ArchiveRuleSummary;
    public constructor() { 
        super();
    }
    public withArchiveRule(archiveRule: ArchiveRuleSummary): ShowArchiveRuleResponse {
        this['archive_rule'] = archiveRule;
        return this;
    }
    public set archiveRule(archiveRule: ArchiveRuleSummary  | undefined) {
        this['archive_rule'] = archiveRule;
    }
    public get archiveRule(): ArchiveRuleSummary | undefined {
        return this['archive_rule'];
    }
}