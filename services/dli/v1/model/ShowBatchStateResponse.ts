
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBatchStateResponse extends SdkResponse {
    public id?: string;
    public state?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBatchStateResponse {
        this['id'] = id;
        return this;
    }
    public withState(state: string): ShowBatchStateResponse {
        this['state'] = state;
        return this;
    }
}