
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeletePublicIpResponse extends SdkResponse {
    private 'job_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobIds(jobIds: Array<string>): BatchDeletePublicIpResponse {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
}