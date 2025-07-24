import { ShareTypeResponseBody } from './ShareTypeResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShareTypesResponse extends SdkResponse {
    private 'share_types'?: Array<ShareTypeResponseBody>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withShareTypes(shareTypes: Array<ShareTypeResponseBody>): ListShareTypesResponse {
        this['share_types'] = shareTypes;
        return this;
    }
    public set shareTypes(shareTypes: Array<ShareTypeResponseBody>  | undefined) {
        this['share_types'] = shareTypes;
    }
    public get shareTypes(): Array<ShareTypeResponseBody> | undefined {
        return this['share_types'];
    }
    public withXRequestId(xRequestId: string): ListShareTypesResponse {
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