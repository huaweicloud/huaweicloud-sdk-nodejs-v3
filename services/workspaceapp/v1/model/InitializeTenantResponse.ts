
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InitializeTenantResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'service_status'?: string;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): InitializeTenantResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withServiceStatus(serviceStatus: string): InitializeTenantResponse {
        this['service_status'] = serviceStatus;
        return this;
    }
    public set serviceStatus(serviceStatus: string  | undefined) {
        this['service_status'] = serviceStatus;
    }
    public get serviceStatus(): string | undefined {
        return this['service_status'];
    }
}