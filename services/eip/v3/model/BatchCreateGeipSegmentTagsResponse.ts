
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateGeipSegmentTagsResponse extends SdkResponse {
    private 'x-request-id'?: string;
    public constructor() { 
        super();
    }
    public withXRequestId(xRequestId: string): BatchCreateGeipSegmentTagsResponse {
        this['x-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['x-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['x-request-id'];
    }
}