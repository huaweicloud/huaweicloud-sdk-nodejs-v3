
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLabelsAomPromGetResponse extends SdkResponse {
    public status?: string;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListLabelsAomPromGetResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: Array<string>): ListLabelsAomPromGetResponse {
        this['data'] = data;
        return this;
    }
}