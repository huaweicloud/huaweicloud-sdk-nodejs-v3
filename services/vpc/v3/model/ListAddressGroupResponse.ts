import { AddressGroup } from './AddressGroup';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressGroupResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'address_groups'?: Array<AddressGroup>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListAddressGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAddressGroups(addressGroups: Array<AddressGroup>): ListAddressGroupResponse {
        this['address_groups'] = addressGroups;
        return this;
    }
    public set addressGroups(addressGroups: Array<AddressGroup>  | undefined) {
        this['address_groups'] = addressGroups;
    }
    public get addressGroups(): Array<AddressGroup> | undefined {
        return this['address_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAddressGroupResponse {
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