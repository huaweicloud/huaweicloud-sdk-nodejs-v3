
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmProtectionTypesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ConfirmProtectionTypesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<string>): ConfirmProtectionTypesResponse {
        this['items'] = items;
        return this;
    }
}