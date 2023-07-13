import { IvsStandardByNameAndIdResponseBodyResult } from './IvsStandardByNameAndIdResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectStandardByNameAndIdResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsStandardByNameAndIdResponseBodyResult;
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
}