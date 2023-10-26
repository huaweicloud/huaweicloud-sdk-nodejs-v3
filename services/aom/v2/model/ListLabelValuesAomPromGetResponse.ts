
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLabelValuesAomPromGetResponse extends SdkResponse {
    public status?: string;
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListLabelValuesAomPromGetResponse {
        this['status'] = status;
        return this;
    }
    public withData(data: Array<string>): ListLabelValuesAomPromGetResponse {
        this['data'] = data;
        return this;
    }
}