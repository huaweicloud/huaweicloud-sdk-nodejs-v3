
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseWaterMarkResponse extends SdkResponse {
    public watermarks?: Array<string>;
    public constructor() { 
        super();
    }
    public withWatermarks(watermarks: Array<string>): ShowDatabaseWaterMarkResponse {
        this['watermarks'] = watermarks;
        return this;
    }
}