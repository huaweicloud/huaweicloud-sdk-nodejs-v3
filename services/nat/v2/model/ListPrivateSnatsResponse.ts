import { PageInfo } from './PageInfo';
import { PrivateSnat } from './PrivateSnat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateSnatsResponse extends SdkResponse {
    private 'snat_rules'?: Array<PrivateSnat>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withSnatRules(snatRules: Array<PrivateSnat>): ListPrivateSnatsResponse {
        this['snat_rules'] = snatRules;
        return this;
    }
    public set snatRules(snatRules: Array<PrivateSnat>  | undefined) {
        this['snat_rules'] = snatRules;
    }
    public get snatRules(): Array<PrivateSnat> | undefined {
        return this['snat_rules'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateSnatsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListPrivateSnatsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}