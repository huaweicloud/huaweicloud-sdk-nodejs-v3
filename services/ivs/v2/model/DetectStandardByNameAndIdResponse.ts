import { IvsStandardByNameAndIdResponseBodyResult } from './IvsStandardByNameAndIdResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByNameAndIdResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByNameAndIdResponseBodyResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMeta(meta: Meta): DetectStandardByNameAndIdResponse {
        this['meta'] = meta;
        return this;
    }
    public withResult(result: IvsStandardByNameAndIdResponseBodyResult): DetectStandardByNameAndIdResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectStandardByNameAndIdResponse {
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