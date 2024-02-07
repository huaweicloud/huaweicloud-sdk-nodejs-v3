import { GeipBindingsInternalResp } from './GeipBindingsInternalResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectGeipBindingsResponse extends SdkResponse {
    private 'geip_bindings'?: Array<GeipBindingsInternalResp>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withGeipBindings(geipBindings: Array<GeipBindingsInternalResp>): ListProjectGeipBindingsResponse {
        this['geip_bindings'] = geipBindings;
        return this;
    }
    public set geipBindings(geipBindings: Array<GeipBindingsInternalResp>  | undefined) {
        this['geip_bindings'] = geipBindings;
    }
    public get geipBindings(): Array<GeipBindingsInternalResp> | undefined {
        return this['geip_bindings'];
    }
    public withRequestId(requestId: string): ListProjectGeipBindingsResponse {
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