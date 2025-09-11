import { HbaConfResult } from './HbaConfResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHbaInfosResponse extends SdkResponse {
    private 'hba_confs'?: Array<HbaConfResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHbaConfs(hbaConfs: Array<HbaConfResult>): ListHbaInfosResponse {
        this['hba_confs'] = hbaConfs;
        return this;
    }
    public set hbaConfs(hbaConfs: Array<HbaConfResult>  | undefined) {
        this['hba_confs'] = hbaConfs;
    }
    public get hbaConfs(): Array<HbaConfResult> | undefined {
        return this['hba_confs'];
    }
    public withTotalCount(totalCount: number): ListHbaInfosResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}