import { AvailableResourceResp } from './AvailableResourceResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableResourceResponse extends SdkResponse {
    private 'available_resource'?: Array<AvailableResourceResp>;
    public constructor() { 
        super();
    }
    public withAvailableResource(availableResource: Array<AvailableResourceResp>): ShowAvailableResourceResponse {
        this['available_resource'] = availableResource;
        return this;
    }
    public set availableResource(availableResource: Array<AvailableResourceResp>  | undefined) {
        this['available_resource'] = availableResource;
    }
    public get availableResource(): Array<AvailableResourceResp> | undefined {
        return this['available_resource'];
    }
}