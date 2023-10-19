import { IvsExtentionByIdCardImageResponseBodyResult } from './IvsExtentionByIdCardImageResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectExtentionByIdCardImageResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsExtentionByIdCardImageResponseBodyResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMeta(meta: Meta): DetectExtentionByIdCardImageResponse {
        this['meta'] = meta;
        return this;
    }
    public withResult(result: IvsExtentionByIdCardImageResponseBodyResult): DetectExtentionByIdCardImageResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectExtentionByIdCardImageResponse {
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