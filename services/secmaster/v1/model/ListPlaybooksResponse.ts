import { PlaybookInfo } from './PlaybookInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlaybooksResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public data?: Array<PlaybookInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListPlaybooksResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListPlaybooksResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListPlaybooksResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListPlaybooksResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListPlaybooksResponse {
        this['page'] = page;
        return this;
    }
    public withData(data: Array<PlaybookInfo>): ListPlaybooksResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPlaybooksResponse {
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