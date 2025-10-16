
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmApplicationTypesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ConfirmApplicationTypesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<string>): ConfirmApplicationTypesResponse {
        this['items'] = items;
        return this;
    }
}