
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppCountResponse extends SdkResponse {
    public total?: number;
    public used?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowAppCountResponse {
        this['total'] = total;
        return this;
    }
    public withUsed(used: number): ShowAppCountResponse {
        this['used'] = used;
        return this;
    }
}