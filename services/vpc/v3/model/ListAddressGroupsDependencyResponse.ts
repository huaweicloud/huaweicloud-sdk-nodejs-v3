import { AddressGroupDependency } from './AddressGroupDependency';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressGroupsDependencyResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'address_groups'?: Array<AddressGroupDependency>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListAddressGroupsDependencyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAddressGroups(addressGroups: Array<AddressGroupDependency>): ListAddressGroupsDependencyResponse {
        this['address_groups'] = addressGroups;
        return this;
    }
    public set addressGroups(addressGroups: Array<AddressGroupDependency>  | undefined) {
        this['address_groups'] = addressGroups;
    }
    public get addressGroups(): Array<AddressGroupDependency> | undefined {
        return this['address_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAddressGroupsDependencyResponse {
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