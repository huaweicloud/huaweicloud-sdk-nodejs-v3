import { IvsStandardByVideoAndIdCardImageResponseBodyResult } from './IvsStandardByVideoAndIdCardImageResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByVideoAndIdCardImageResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByVideoAndIdCardImageResponseBodyResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMeta(meta: Meta): DetectStandardByVideoAndIdCardImageResponse {
        this['meta'] = meta;
        return this;
    }
    public withResult(result: IvsStandardByVideoAndIdCardImageResponseBodyResult): DetectStandardByVideoAndIdCardImageResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectStandardByVideoAndIdCardImageResponse {
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