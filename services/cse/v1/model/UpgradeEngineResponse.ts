
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeEngineResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'job_id'?: number | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpgradeEngineResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpgradeEngineResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: number): UpgradeEngineResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}