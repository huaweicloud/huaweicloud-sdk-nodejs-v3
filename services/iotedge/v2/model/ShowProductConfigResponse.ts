
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProductConfigResponse extends SdkResponse {
    private 'service_id'?: string;
    private 'service_type'?: string;
    public description?: string;
    public properties?: Array<object>;
    public constructor() { 
        super();
    }
    public withServiceId(serviceId: string): ShowProductConfigResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceType(serviceType: string): ShowProductConfigResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withDescription(description: string): ShowProductConfigResponse {
        this['description'] = description;
        return this;
    }
    public withProperties(properties: Array<object>): ShowProductConfigResponse {
        this['properties'] = properties;
        return this;
    }
}