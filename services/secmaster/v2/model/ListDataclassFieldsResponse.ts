import { FieldResponseBody } from './FieldResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataclassFieldsResponse extends SdkResponse {
    private 'field_details'?: Array<FieldResponseBody>;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withFieldDetails(fieldDetails: Array<FieldResponseBody>): ListDataclassFieldsResponse {
        this['field_details'] = fieldDetails;
        return this;
    }
    public set fieldDetails(fieldDetails: Array<FieldResponseBody>  | undefined) {
        this['field_details'] = fieldDetails;
    }
    public get fieldDetails(): Array<FieldResponseBody> | undefined {
        return this['field_details'];
    }
    public withTotal(total: number): ListDataclassFieldsResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDataclassFieldsResponse {
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