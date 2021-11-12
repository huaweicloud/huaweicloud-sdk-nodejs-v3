import { AddressGroup } from './AddressGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAddressGroupResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'address_group'?: AddressGroup | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowAddressGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withAddressGroup(addressGroup: AddressGroup): ShowAddressGroupResponse {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: AddressGroup | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup() {
        return this['address_group'];
    }
}