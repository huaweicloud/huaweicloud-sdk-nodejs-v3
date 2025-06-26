import { InternalEndpoint } from './InternalEndpoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceInternalEndpointsResponse extends SdkResponse {
    private 'internal_endpoints'?: Array<InternalEndpoint>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInternalEndpoints(internalEndpoints: Array<InternalEndpoint>): ListInstanceInternalEndpointsResponse {
        this['internal_endpoints'] = internalEndpoints;
        return this;
    }
    public set internalEndpoints(internalEndpoints: Array<InternalEndpoint>  | undefined) {
        this['internal_endpoints'] = internalEndpoints;
    }
    public get internalEndpoints(): Array<InternalEndpoint> | undefined {
        return this['internal_endpoints'];
    }
    public withTotal(total: number): ListInstanceInternalEndpointsResponse {
        this['total'] = total;
        return this;
    }
}