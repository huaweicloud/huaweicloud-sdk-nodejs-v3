
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDiskResponse extends SdkResponse {
    public used?: string;
    public total?: string;
    public constructor() { 
        super();
    }
    public withUsed(used: string): ShowInstanceDiskResponse {
        this['used'] = used;
        return this;
    }
    public withTotal(total: string): ShowInstanceDiskResponse {
        this['total'] = total;
        return this;
    }
}