
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbNamesResponse extends SdkResponse {
    public data?: Array<object>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<object>): ListDbNamesResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListDbNamesResponse {
        this['total'] = total;
        return this;
    }
}