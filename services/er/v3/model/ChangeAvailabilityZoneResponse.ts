import { EnterpriseRouter } from './EnterpriseRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeAvailabilityZoneResponse extends SdkResponse {
    public instance?: EnterpriseRouter;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withInstance(instance: EnterpriseRouter): ChangeAvailabilityZoneResponse {
        this['instance'] = instance;
        return this;
    }
    public withRequestId(requestId: string): ChangeAvailabilityZoneResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}