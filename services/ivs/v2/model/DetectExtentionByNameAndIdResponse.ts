import { IvsExtentionByNameAndIdResponseBodyResult } from './IvsExtentionByNameAndIdResponseBodyResult';
import { Meta } from './Meta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectExtentionByNameAndIdResponse extends SdkResponse {
    public meta?: Meta;
    public result?: IvsExtentionByNameAndIdResponseBodyResult;
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
}