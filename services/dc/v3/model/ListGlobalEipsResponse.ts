import { ListBindingGeip } from './ListBindingGeip';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalEipsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eips'?: Array<ListBindingGeip>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGlobalEipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEips(globalEips: Array<ListBindingGeip>): ListGlobalEipsResponse {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<ListBindingGeip>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<ListBindingGeip> | undefined {
        return this['global_eips'];
    }
    public withXRequestId(xRequestId: string): ListGlobalEipsResponse {
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