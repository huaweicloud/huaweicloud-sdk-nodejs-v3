import { AddressGroup } from './AddressGroup';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressGroupResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'address_groups'?: Array<AddressGroup> | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListAddressGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withAddressGroups(addressGroups: Array<AddressGroup>): ListAddressGroupResponse {
        this['address_groups'] = addressGroups;
        return this;
    }
    public set addressGroups(addressGroups: Array<AddressGroup> | undefined) {
        this['address_groups'] = addressGroups;
    }
    public get addressGroups() {
        return this['address_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAddressGroupResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}