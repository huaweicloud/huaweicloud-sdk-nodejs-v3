
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountAllResourcesResponse extends SdkResponse {
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): CountAllResourcesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}