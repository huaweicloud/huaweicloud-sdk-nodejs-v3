import { ListSharesByTagResource } from './ListSharesByTagResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharesByTagResponse extends SdkResponse {
    public resources?: Array<ListSharesByTagResource>;
    private 'total_count'?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ListSharesByTagResource>): ListSharesByTagResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListSharesByTagResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withXRequestId(xRequestId: string): ListSharesByTagResponse {
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