
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuthGrantResponse extends SdkResponse {
    private 'service_name'?: string;
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withServiceName(serviceName: string): ShowAuthGrantResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withStatus(status: boolean): ShowAuthGrantResponse {
        this['status'] = status;
        return this;
    }
}