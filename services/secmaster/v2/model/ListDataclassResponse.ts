import { DataClassResponseBody } from './DataClassResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataclassResponse extends SdkResponse {
    private 'dataclass_details'?: Array<DataClassResponseBody>;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withDataclassDetails(dataclassDetails: Array<DataClassResponseBody>): ListDataclassResponse {
        this['dataclass_details'] = dataclassDetails;
        return this;
    }
    public set dataclassDetails(dataclassDetails: Array<DataClassResponseBody>  | undefined) {
        this['dataclass_details'] = dataclassDetails;
    }
    public get dataclassDetails(): Array<DataClassResponseBody> | undefined {
        return this['dataclass_details'];
    }
    public withTotal(total: number): ListDataclassResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDataclassResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}