import { DataObjectDetail } from './DataObjectDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatapanelObjectsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public success?: boolean;
    public data?: Array<DataObjectDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListDatapanelObjectsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListDatapanelObjectsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListDatapanelObjectsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListDatapanelObjectsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListDatapanelObjectsResponse {
        this['page'] = page;
        return this;
    }
    public withSuccess(success: boolean): ListDatapanelObjectsResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<DataObjectDetail>): ListDatapanelObjectsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDatapanelObjectsResponse {
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