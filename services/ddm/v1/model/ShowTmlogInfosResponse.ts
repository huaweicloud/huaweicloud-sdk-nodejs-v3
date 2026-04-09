import { TmlogInfo } from './TmlogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTmlogInfosResponse extends SdkResponse {
    public tmlogs?: Array<TmlogInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTmlogs(tmlogs: Array<TmlogInfo>): ShowTmlogInfosResponse {
        this['tmlogs'] = tmlogs;
        return this;
    }
    public withTotal(total: number): ShowTmlogInfosResponse {
        this['total'] = total;
        return this;
    }
}