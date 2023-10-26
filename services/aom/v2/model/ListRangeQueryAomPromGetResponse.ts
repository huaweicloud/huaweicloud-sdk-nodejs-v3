
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRangeQueryAomPromGetResponse extends SdkResponse {
    public status?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListRangeQueryAomPromGetResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: object): ListRangeQueryAomPromGetResponse {
        this['data'] = data;
        return this;
    }
}