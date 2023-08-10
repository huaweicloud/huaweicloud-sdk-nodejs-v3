
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateResourcesResponse extends SdkResponse {
    private 'succeed_count'?: number;
    public constructor() { 
        super();
    }
    public withSucceedCount(succeedCount: number): BatchCreateResourcesResponse {
        this['succeed_count'] = succeedCount;
        return this;
    }
    public set succeedCount(succeedCount: number  | undefined) {
        this['succeed_count'] = succeedCount;
    }
    public get succeedCount(): number | undefined {
        return this['succeed_count'];
    }
}