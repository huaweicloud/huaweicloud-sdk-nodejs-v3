import { CatalogueDetailInfo } from './CatalogueDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCatalogueResponse extends SdkResponse {
    public code?: string;
    public data?: CatalogueDetailInfo;
    public message?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateCatalogueResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: CatalogueDetailInfo): CreateCatalogueResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): CreateCatalogueResponse {
        this['message'] = message;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateCatalogueResponse {
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