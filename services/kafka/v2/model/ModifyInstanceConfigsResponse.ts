
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyInstanceConfigsResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'dynamic_config'?: number;
    private 'static_config'?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ModifyInstanceConfigsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDynamicConfig(dynamicConfig: number): ModifyInstanceConfigsResponse {
        this['dynamic_config'] = dynamicConfig;
        return this;
    }
    public set dynamicConfig(dynamicConfig: number  | undefined) {
        this['dynamic_config'] = dynamicConfig;
    }
    public get dynamicConfig(): number | undefined {
        return this['dynamic_config'];
    }
    public withStaticConfig(staticConfig: number): ModifyInstanceConfigsResponse {
        this['static_config'] = staticConfig;
        return this;
    }
    public set staticConfig(staticConfig: number  | undefined) {
        this['static_config'] = staticConfig;
    }
    public get staticConfig(): number | undefined {
        return this['static_config'];
    }
}