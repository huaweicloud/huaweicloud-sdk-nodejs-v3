import { AddressGroup } from './AddressGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAddressGroupResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'address_group'?: AddressGroup;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateAddressGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAddressGroup(addressGroup: AddressGroup): UpdateAddressGroupResponse {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: AddressGroup  | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup(): AddressGroup | undefined {
        return this['address_group'];
    }
}