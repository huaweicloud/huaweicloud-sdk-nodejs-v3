import { IvsStandardByVideoAndNameAndIdResponseBodyResult } from './IvsStandardByVideoAndNameAndIdResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByVideoAndNameAndIdResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByVideoAndNameAndIdResponseBodyResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMeta(meta: Meta): DetectStandardByVideoAndNameAndIdResponse {
        this['meta'] = meta;
        return this;
    }
    public withResult(result: IvsStandardByVideoAndNameAndIdResponseBodyResult): DetectStandardByVideoAndNameAndIdResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectStandardByVideoAndNameAndIdResponse {
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