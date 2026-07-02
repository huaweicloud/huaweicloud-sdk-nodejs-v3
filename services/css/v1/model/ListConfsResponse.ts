import { Confs } from './Confs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfsResponse extends SdkResponse {
    public confs?: Array<Confs>;
    public totalSize?: number;
    public constructor() { 
        super();
    }
    public withConfs(confs: Array<Confs>): ListConfsResponse {
        this['confs'] = confs;
        return this;
    }
    public withTotalSize(totalSize: number): ListConfsResponse {
        this['totalSize'] = totalSize;
        return this;
    }
}