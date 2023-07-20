import { AcceleratorDetail } from './AcceleratorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAcceleratorResponse extends SdkResponse {
    public accelerator?: AcceleratorDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAccelerator(accelerator: AcceleratorDetail): UpdateAcceleratorResponse {
        this['accelerator'] = accelerator;
        return this;
    }
    public withRequestId(requestId: string): UpdateAcceleratorResponse {
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