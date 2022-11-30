import { IvsExtentionByIdCardImageResponseBodyResult } from './IvsExtentionByIdCardImageResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectExtentionByIdCardImageResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsExtentionByIdCardImageResponseBodyResult;
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
}