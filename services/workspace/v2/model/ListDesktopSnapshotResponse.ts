import { DesktopSnapshotDetailInfo } from './DesktopSnapshotDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopSnapshotResponse extends SdkResponse {
    private 'desktop_snapshots'?: Array<DesktopSnapshotDetailInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktopSnapshots(desktopSnapshots: Array<DesktopSnapshotDetailInfo>): ListDesktopSnapshotResponse {
        this['desktop_snapshots'] = desktopSnapshots;
        return this;
    }
    public set desktopSnapshots(desktopSnapshots: Array<DesktopSnapshotDetailInfo>  | undefined) {
        this['desktop_snapshots'] = desktopSnapshots;
    }
    public get desktopSnapshots(): Array<DesktopSnapshotDetailInfo> | undefined {
        return this['desktop_snapshots'];
    }
    public withTotalCount(totalCount: number): ListDesktopSnapshotResponse {
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