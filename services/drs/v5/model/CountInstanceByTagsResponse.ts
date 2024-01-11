
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountInstanceByTagsResponse extends SdkResponse {
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): CountInstanceByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}