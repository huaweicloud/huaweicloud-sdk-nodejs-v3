
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRangeQueryAomPromPostResponse extends SdkResponse {
    public status?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListRangeQueryAomPromPostResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: object): ListRangeQueryAomPromPostResponse {
        this['data'] = data;
        return this;
    }
}