import { ListReleasePackagesRespData } from './ListReleasePackagesRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryReleasePackagesResponse extends SdkResponse {
    public data?: Array<ListReleasePackagesRespData>;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: Array<ListReleasePackagesRespData>): ListFactoryReleasePackagesResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListFactoryReleasePackagesResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListFactoryReleasePackagesResponse {
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