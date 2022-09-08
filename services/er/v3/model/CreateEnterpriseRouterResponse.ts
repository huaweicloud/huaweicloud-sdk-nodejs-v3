import { EnterpriseRouter } from './EnterpriseRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEnterpriseRouterResponse extends SdkResponse {
    public instance?: EnterpriseRouter;
    private 'request_id'?: string | undefined;
    private 'X-Client-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withInstance(instance: EnterpriseRouter): CreateEnterpriseRouterResponse {
        this['instance'] = instance;
        return this;
    }
    public withRequestId(requestId: string): CreateEnterpriseRouterResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): CreateEnterpriseRouterResponse {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
}