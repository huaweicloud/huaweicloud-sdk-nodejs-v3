import { ListSnapshotBackupsResp } from './ListSnapshotBackupsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotsResponse extends SdkResponse {
    public backups?: Array<ListSnapshotBackupsResp>;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<ListSnapshotBackupsResp>): ListSnapshotsResponse {
        this['backups'] = backups;
        return this;
    }
}