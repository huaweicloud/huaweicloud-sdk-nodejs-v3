import { ActionInfo } from './ActionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlaybookActionsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public data?: Array<ActionInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListPlaybookActionsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListPlaybookActionsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListPlaybookActionsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListPlaybookActionsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListPlaybookActionsResponse {
        this['page'] = page;
        return this;
    }
    public withData(data: Array<ActionInfo>): ListPlaybookActionsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPlaybookActionsResponse {
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