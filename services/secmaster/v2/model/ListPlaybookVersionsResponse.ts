import { PlaybookVersionListEntity } from './PlaybookVersionListEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlaybookVersionsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public size?: number;
    public page?: number;
    public total?: number;
    public data?: Array<PlaybookVersionListEntity>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListPlaybookVersionsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListPlaybookVersionsResponse {
        this['message'] = message;
        return this;
    }
    public withSize(size: number): ListPlaybookVersionsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListPlaybookVersionsResponse {
        this['page'] = page;
        return this;
    }
    public withTotal(total: number): ListPlaybookVersionsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PlaybookVersionListEntity>): ListPlaybookVersionsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPlaybookVersionsResponse {
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