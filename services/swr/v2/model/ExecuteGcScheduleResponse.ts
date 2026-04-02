
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteGcScheduleResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ExecuteGcScheduleResponse {
        this['id'] = id;
        return this;
    }
}