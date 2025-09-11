import { HbaHistoryResult } from './HbaHistoryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHbaInfoHistoryResponse extends SdkResponse {
    private 'hba_confs'?: Array<HbaHistoryResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHbaConfs(hbaConfs: Array<HbaHistoryResult>): ListHbaInfoHistoryResponse {
        this['hba_confs'] = hbaConfs;
        return this;
    }
    public set hbaConfs(hbaConfs: Array<HbaHistoryResult>  | undefined) {
        this['hba_confs'] = hbaConfs;
    }
    public get hbaConfs(): Array<HbaHistoryResult> | undefined {
        return this['hba_confs'];
    }
    public withTotalCount(totalCount: number): ListHbaInfoHistoryResponse {
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