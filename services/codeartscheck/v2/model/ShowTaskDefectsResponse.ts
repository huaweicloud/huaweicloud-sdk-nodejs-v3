import { DefectInfoV2 } from './DefectInfoV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDefectsResponse extends SdkResponse {
    public defects?: Array<DefectInfoV2>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDefects(defects: Array<DefectInfoV2>): ShowTaskDefectsResponse {
        this['defects'] = defects;
        return this;
    }
    public withTotal(total: number): ShowTaskDefectsResponse {
        this['total'] = total;
        return this;
    }
}