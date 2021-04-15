import { Link } from './Link';
import { SnapshotList } from './SnapshotList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotsResponse extends SdkResponse {
    public count?: number;
    public snapshots?: Array<SnapshotList>;
    private 'snapshots_links'?: Array<Link> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSnapshotsResponse {
        this['count'] = count;
        return this;
    }
    public withSnapshots(snapshots: Array<SnapshotList>): ListSnapshotsResponse {
        this['snapshots'] = snapshots;
        return this;
    }
    public withSnapshotsLinks(snapshotsLinks: Array<Link>): ListSnapshotsResponse {
        this['snapshots_links'] = snapshotsLinks;
        return this;
    }
    public set snapshotsLinks(snapshotsLinks: Array<Link> | undefined) {
        this['snapshots_links'] = snapshotsLinks;
    }
    public get snapshotsLinks() {
        return this['snapshots_links'];
    }
}