
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataLevelTableCompareJobResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateDataLevelTableCompareJobResponse {
        this['id'] = id;
        return this;
    }
}