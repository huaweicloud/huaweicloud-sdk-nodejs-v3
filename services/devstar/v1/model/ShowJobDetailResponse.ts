
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public jobStatus?: object;
    public jobResult?: string;
    public constructor() { 
        super();
    }
    public withId(id?: string): ShowJobDetailResponse {
        this.id = id;
        return this;
    }
    public withName(name?: string): ShowJobDetailResponse {
        this.name = name;
        return this;
    }
    public withJobStatus(jobStatus?: object): ShowJobDetailResponse {
        this.jobStatus = jobStatus;
        return this;
    }
    public withJobResult(jobResult?: string): ShowJobDetailResponse {
        this.jobResult = jobResult;
        return this;
    }
}