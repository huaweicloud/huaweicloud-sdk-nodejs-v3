import { PageInfo } from './PageInfo';
import { PrivateDnat } from './PrivateDnat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateDnatsResponse extends SdkResponse {
    private 'dnat_rules'?: Array<PrivateDnat>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withDnatRules(dnatRules: Array<PrivateDnat>): ListPrivateDnatsResponse {
        this['dnat_rules'] = dnatRules;
        return this;
    }
    public set dnatRules(dnatRules: Array<PrivateDnat>  | undefined) {
        this['dnat_rules'] = dnatRules;
    }
    public get dnatRules(): Array<PrivateDnat> | undefined {
        return this['dnat_rules'];
    }
    public withRequestId(requestId: string): ListPrivateDnatsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateDnatsResponse {
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