
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceQuotaResponse extends SdkResponse {
    public cpu?: number;
    private 'project_id'?: string;
    public quota?: number;
    public ram?: number;
    public constructor() { 
        super();
    }
    public withCpu(cpu: number): ShowInstanceQuotaResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withProjectId(projectId: string): ShowInstanceQuotaResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withQuota(quota: number): ShowInstanceQuotaResponse {
        this['quota'] = quota;
        return this;
    }
    public withRam(ram: number): ShowInstanceQuotaResponse {
        this['ram'] = ram;
        return this;
    }
}