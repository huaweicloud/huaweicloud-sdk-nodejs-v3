import { IvsStandardByIdCardImageResponseBodyResult } from './IvsStandardByIdCardImageResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByIdCardImageResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByIdCardImageResponseBodyResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMeta(meta: Meta): DetectStandardByIdCardImageResponse {
        this['meta'] = meta;
        return this;
    }
    public withResult(result: IvsStandardByIdCardImageResponseBodyResult): DetectStandardByIdCardImageResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectStandardByIdCardImageResponse {
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