
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEcsQuotaResponse extends SdkResponse {
    private 'status_v6'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatusV6(statusV6: string): ShowEcsQuotaResponse {
        this['status_v6'] = statusV6;
        return this;
    }
    public set statusV6(statusV6: string  | undefined) {
        this['status_v6'] = statusV6;
    }
    public get statusV6(): string | undefined {
        return this['status_v6'];
    }
    public withStatus(status: string): ShowEcsQuotaResponse {
        this['status'] = status;
        return this;
    }
}