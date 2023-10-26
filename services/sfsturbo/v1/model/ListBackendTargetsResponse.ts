import { ShowBackendTargetInfoResponseBody } from './ShowBackendTargetInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackendTargetsResponse extends SdkResponse {
    public count?: number;
    public targets?: Array<ShowBackendTargetInfoResponseBody>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListBackendTargetsResponse {
        this['count'] = count;
        return this;
    }
    public withTargets(targets: Array<ShowBackendTargetInfoResponseBody>): ListBackendTargetsResponse {
        this['targets'] = targets;
        return this;
    }
    public withXRequestId(xRequestId: string): ListBackendTargetsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}