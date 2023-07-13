import { IvsStandardByVideoAndIdCardImageResponseBodyResult } from './IvsStandardByVideoAndIdCardImageResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByVideoAndIdCardImageResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByVideoAndIdCardImageResponseBodyResult;
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
}