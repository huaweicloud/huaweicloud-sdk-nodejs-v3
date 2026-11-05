import { ListConfsRespConfs } from './ListConfsRespConfs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfsResponse extends SdkResponse {
    public confs?: Array<ListConfsRespConfs>;
    public totalSize?: number;
    public constructor() { 
        super();
    }
    public withConfs(confs: Array<ListConfsRespConfs>): ListConfsResponse {
        this['confs'] = confs;
        return this;
    }
    public withTotalSize(totalSize: number): ListConfsResponse {
        this['totalSize'] = totalSize;
        return this;
    }
}