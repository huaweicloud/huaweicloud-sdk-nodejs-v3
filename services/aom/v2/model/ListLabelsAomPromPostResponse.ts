
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLabelsAomPromPostResponse extends SdkResponse {
    public status?: string;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListLabelsAomPromPostResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: Array<string>): ListLabelsAomPromPostResponse {
        this['data'] = data;
        return this;
    }
}