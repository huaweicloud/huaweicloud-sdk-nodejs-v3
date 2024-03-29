
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDimensionLogicTableByIdResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ShowDimensionLogicTableByIdResponse {
        this['data'] = data;
        return this;
    }
}