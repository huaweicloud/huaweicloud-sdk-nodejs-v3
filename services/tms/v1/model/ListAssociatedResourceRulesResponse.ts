import { AssociatedResourceRule } from './AssociatedResourceRule';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociatedResourceRulesResponse extends SdkResponse {
    public rules?: Array<AssociatedResourceRule>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<AssociatedResourceRule>): ListAssociatedResourceRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotalCount(totalCount: number): ListAssociatedResourceRulesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAssociatedResourceRulesResponse {
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