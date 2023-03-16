import { IvsStandardByVideoAndNameAndIdResponseBodyResult } from './IvsStandardByVideoAndNameAndIdResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByVideoAndNameAndIdResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByVideoAndNameAndIdResponseBodyResult;
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
}