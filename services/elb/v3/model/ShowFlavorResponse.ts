import { Flavor } from './Flavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlavorResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public flavor?: Flavor;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowFlavorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withFlavor(flavor: Flavor): ShowFlavorResponse {
        this['flavor'] = flavor;
        return this;
    }
}