import { AcceleratorDetail } from './AcceleratorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAcceleratorResponse extends SdkResponse {
    public accelerator?: AcceleratorDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAccelerator(accelerator: AcceleratorDetail): ShowAcceleratorResponse {
        this['accelerator'] = accelerator;
        return this;
    }
    public withRequestId(requestId: string): ShowAcceleratorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}