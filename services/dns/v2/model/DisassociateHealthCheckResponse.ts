
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateHealthCheckResponse extends SdkResponse {
    private 'health_check_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withHealthCheckId(healthCheckId: string): DisassociateHealthCheckResponse {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId() {
        return this['health_check_id'];
    }
}