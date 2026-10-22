import { ListSnapshotChainsResponseBodySnapshotChains } from './ListSnapshotChainsResponseBodySnapshotChains';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotChainsResponse extends SdkResponse {
    private 'snapshot_chains'?: Array<ListSnapshotChainsResponseBodySnapshotChains>;
    public constructor() { 
        super();
    }
    public withSnapshotChains(snapshotChains: Array<ListSnapshotChainsResponseBodySnapshotChains>): ListSnapshotChainsResponse {
        this['snapshot_chains'] = snapshotChains;
        return this;
    }
    public set snapshotChains(snapshotChains: Array<ListSnapshotChainsResponseBodySnapshotChains>  | undefined) {
        this['snapshot_chains'] = snapshotChains;
    }
    public get snapshotChains(): Array<ListSnapshotChainsResponseBodySnapshotChains> | undefined {
        return this['snapshot_chains'];
    }
}