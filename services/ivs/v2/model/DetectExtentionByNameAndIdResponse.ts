import { IvsExtentionByNameAndIdResponseBodyResult } from './IvsExtentionByNameAndIdResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectExtentionByNameAndIdResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsExtentionByNameAndIdResponseBodyResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMeta(meta: Meta): DetectExtentionByNameAndIdResponse {
        this['meta'] = meta;
        return this;
    }
    public withResult(result: IvsExtentionByNameAndIdResponseBodyResult): DetectExtentionByNameAndIdResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectExtentionByNameAndIdResponse {
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