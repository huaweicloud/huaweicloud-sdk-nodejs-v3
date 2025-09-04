
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainClientStatsResponse extends SdkResponse {
    private 'service_area'?: string;
    public result?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withServiceArea(serviceArea: string): ListDomainClientStatsResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withResult(result: Array<{ [key: string]: object; }>): ListDomainClientStatsResponse {
        this['result'] = result;
        return this;
    }
}