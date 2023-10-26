import { FsDirUasge } from './FsDirUasge';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFsDirUsageResponse extends SdkResponse {
    private 'dir_usage'?: FsDirUasge;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withDirUsage(dirUsage: FsDirUasge): ShowFsDirUsageResponse {
        this['dir_usage'] = dirUsage;
        return this;
    }
    public set dirUsage(dirUsage: FsDirUasge  | undefined) {
        this['dir_usage'] = dirUsage;
    }
    public get dirUsage(): FsDirUasge | undefined {
        return this['dir_usage'];
    }
    public withXRequestId(xRequestId: string): ShowFsDirUsageResponse {
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