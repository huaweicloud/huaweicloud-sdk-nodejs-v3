import { WdrSnapshot } from './WdrSnapshot';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWdrSnapshotResponse extends SdkResponse {
    private 'snapshot_list'?: Array<WdrSnapshot>;
    public constructor() { 
        super();
    }
    public withSnapshotList(snapshotList: Array<WdrSnapshot>): ShowWdrSnapshotResponse {
        this['snapshot_list'] = snapshotList;
        return this;
    }
    public set snapshotList(snapshotList: Array<WdrSnapshot>  | undefined) {
        this['snapshot_list'] = snapshotList;
    }
    public get snapshotList(): Array<WdrSnapshot> | undefined {
        return this['snapshot_list'];
    }
}