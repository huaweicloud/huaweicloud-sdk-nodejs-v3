import { IvsStandardByIdCardImageResponseBodyResult } from './IvsStandardByIdCardImageResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByIdCardImageResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByIdCardImageResponseBodyResult;
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
}