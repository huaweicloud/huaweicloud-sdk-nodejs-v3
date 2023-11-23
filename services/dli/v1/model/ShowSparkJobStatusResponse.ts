
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSparkJobStatusResponse extends SdkResponse {
    public id?: string;
    public state?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSparkJobStatusResponse {
        this['id'] = id;
        return this;
    }
    public withState(state: string): ShowSparkJobStatusResponse {
        this['state'] = state;
        return this;
    }
}