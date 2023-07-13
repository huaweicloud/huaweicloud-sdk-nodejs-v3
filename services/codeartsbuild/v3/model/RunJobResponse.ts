
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunJobResponse extends SdkResponse {
    private 'octopus_job_name'?: string | undefined;
    private 'actual_build_number'?: string | undefined;
    private 'daily_build_number'?: string | undefined;
    public constructor() { 
        super();
    }
    public withOctopusJobName(octopusJobName: string): RunJobResponse {
        this['octopus_job_name'] = octopusJobName;
        return this;
    }
    public set octopusJobName(octopusJobName: string | undefined) {
        this['octopus_job_name'] = octopusJobName;
    }
    public get octopusJobName() {
        return this['octopus_job_name'];
    }
    public withActualBuildNumber(actualBuildNumber: string): RunJobResponse {
        this['actual_build_number'] = actualBuildNumber;
        return this;
    }
    public set actualBuildNumber(actualBuildNumber: string | undefined) {
        this['actual_build_number'] = actualBuildNumber;
    }
    public get actualBuildNumber() {
        return this['actual_build_number'];
    }
    public withDailyBuildNumber(dailyBuildNumber: string): RunJobResponse {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber() {
        return this['daily_build_number'];
    }
}