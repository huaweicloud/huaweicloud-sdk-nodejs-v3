import { LiveSnapshotConfig } from './LiveSnapshotConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotConfigsResponse extends SdkResponse {
    public total?: number;
    private 'snapshot_config_list'?: Array<LiveSnapshotConfig>;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSnapshotConfigsResponse {
        this['total'] = total;
        return this;
    }
    public withSnapshotConfigList(snapshotConfigList: Array<LiveSnapshotConfig>): ListSnapshotConfigsResponse {
        this['snapshot_config_list'] = snapshotConfigList;
        return this;
    }
    public set snapshotConfigList(snapshotConfigList: Array<LiveSnapshotConfig>  | undefined) {
        this['snapshot_config_list'] = snapshotConfigList;
    }
    public get snapshotConfigList(): Array<LiveSnapshotConfig> | undefined {
        return this['snapshot_config_list'];
    }
    public withLimit(limit: number): ListSnapshotConfigsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSnapshotConfigsResponse {
        this['offset'] = offset;
        return this;
    }
}