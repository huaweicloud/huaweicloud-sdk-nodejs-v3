import { RespHostType } from './RespHostType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedHostTypesResponse extends SdkResponse {
    private 'dedicated_host_types'?: Array<RespHostType>;
    public constructor() { 
        super();
    }
    public withDedicatedHostTypes(dedicatedHostTypes: Array<RespHostType>): ListDedicatedHostTypesResponse {
        this['dedicated_host_types'] = dedicatedHostTypes;
        return this;
    }
    public set dedicatedHostTypes(dedicatedHostTypes: Array<RespHostType>  | undefined) {
        this['dedicated_host_types'] = dedicatedHostTypes;
    }
    public get dedicatedHostTypes(): Array<RespHostType> | undefined {
        return this['dedicated_host_types'];
    }
}