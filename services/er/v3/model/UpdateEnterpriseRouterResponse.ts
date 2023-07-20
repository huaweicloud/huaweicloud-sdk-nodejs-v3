import { EnterpriseRouter } from './EnterpriseRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnterpriseRouterResponse extends SdkResponse {
    public instance?: EnterpriseRouter;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: EnterpriseRouter): UpdateEnterpriseRouterResponse {
        this['instance'] = instance;
        return this;
    }
    public withRequestId(requestId: string): UpdateEnterpriseRouterResponse {
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