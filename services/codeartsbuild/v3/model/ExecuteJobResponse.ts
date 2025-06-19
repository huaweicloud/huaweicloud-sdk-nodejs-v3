
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteJobResponse extends SdkResponse {
    private 'octopus_job_name'?: string;
    private 'actual_build_number'?: string;
    private 'daily_build_number'?: string;
    public constructor() { 
        super();
    }
    public withOctopusJobName(octopusJobName: string): ExecuteJobResponse {
        this['octopus_job_name'] = octopusJobName;
        return this;
    }
    public set octopusJobName(octopusJobName: string  | undefined) {
        this['octopus_job_name'] = octopusJobName;
    }
    public get octopusJobName(): string | undefined {
        return this['octopus_job_name'];
    }
    public withActualBuildNumber(actualBuildNumber: string): ExecuteJobResponse {
        this['actual_build_number'] = actualBuildNumber;
        return this;
    }
    public set actualBuildNumber(actualBuildNumber: string  | undefined) {
        this['actual_build_number'] = actualBuildNumber;
    }
    public get actualBuildNumber(): string | undefined {
        return this['actual_build_number'];
    }
    public withDailyBuildNumber(dailyBuildNumber: string): ExecuteJobResponse {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
}