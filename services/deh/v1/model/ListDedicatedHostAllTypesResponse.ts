import { DedicatedHostType } from './DedicatedHostType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedHostAllTypesResponse extends SdkResponse {
    private 'dedicated_host_types'?: Array<DedicatedHostType>;
    public constructor() { 
        super();
    }
    public withDedicatedHostTypes(dedicatedHostTypes: Array<DedicatedHostType>): ListDedicatedHostAllTypesResponse {
        this['dedicated_host_types'] = dedicatedHostTypes;
        return this;
    }
    public set dedicatedHostTypes(dedicatedHostTypes: Array<DedicatedHostType>  | undefined) {
        this['dedicated_host_types'] = dedicatedHostTypes;
    }
    public get dedicatedHostTypes(): Array<DedicatedHostType> | undefined {
        return this['dedicated_host_types'];
    }
}