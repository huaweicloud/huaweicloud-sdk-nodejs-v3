import { ListBindingGeip } from './ListBindingGeip';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnbindGlobalEipsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eips'?: ListBindingGeip;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UnbindGlobalEipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEips(globalEips: ListBindingGeip): UnbindGlobalEipsResponse {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: ListBindingGeip  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): ListBindingGeip | undefined {
        return this['global_eips'];
    }
    public withXRequestId(xRequestId: string): UnbindGlobalEipsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}