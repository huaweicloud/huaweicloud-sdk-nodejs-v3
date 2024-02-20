import { ArchiveRuleSummary } from './ArchiveRuleSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListArchiveRulesResponse extends SdkResponse {
    private 'archive_rules'?: Array<ArchiveRuleSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withArchiveRules(archiveRules: Array<ArchiveRuleSummary>): ListArchiveRulesResponse {
        this['archive_rules'] = archiveRules;
        return this;
    }
    public set archiveRules(archiveRules: Array<ArchiveRuleSummary>  | undefined) {
        this['archive_rules'] = archiveRules;
    }
    public get archiveRules(): Array<ArchiveRuleSummary> | undefined {
        return this['archive_rules'];
    }
    public withPageInfo(pageInfo: PageInfo): ListArchiveRulesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}