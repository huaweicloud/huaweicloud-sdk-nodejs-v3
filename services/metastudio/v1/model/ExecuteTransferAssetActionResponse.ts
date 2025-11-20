import { TransAcceptResponse } from './TransAcceptResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteTransferAssetActionResponse extends SdkResponse {
    private 'accept_respone'?: TransAcceptResponse;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAcceptRespone(acceptRespone: TransAcceptResponse): ExecuteTransferAssetActionResponse {
        this['accept_respone'] = acceptRespone;
        return this;
    }
    public set acceptRespone(acceptRespone: TransAcceptResponse  | undefined) {
        this['accept_respone'] = acceptRespone;
    }
    public get acceptRespone(): TransAcceptResponse | undefined {
        return this['accept_respone'];
    }
    public withXRequestId(xRequestId: string): ExecuteTransferAssetActionResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}