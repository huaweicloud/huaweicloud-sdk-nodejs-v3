
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchGaussMySqlConfigurationResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'param_group_name'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): SwitchGaussMySqlConfigurationResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withParamGroupName(paramGroupName: string): SwitchGaussMySqlConfigurationResponse {
        this['param_group_name'] = paramGroupName;
        return this;
    }
    public set paramGroupName(paramGroupName: string  | undefined) {
        this['param_group_name'] = paramGroupName;
    }
    public get paramGroupName(): string | undefined {
        return this['param_group_name'];
    }
}