import { L7Rule } from './L7Rule';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListL7RulesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public rules?: Array<L7Rule>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListL7RulesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListL7RulesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRules(rules: Array<L7Rule>): ListL7RulesResponse {
        this['rules'] = rules;
        return this;
    }
}