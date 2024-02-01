
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountGcbResourceByTagResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): CountGcbResourceByTagResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRequestId(requestId: string): CountGcbResourceByTagResponse {
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