import { WdrSnapshotRecord } from './WdrSnapshotRecord';


export class WdrSnapshotGroupResult {
    private 'total_count'?: number;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public snapshots?: Array<WdrSnapshotRecord>;
    public constructor(totalCount?: number, beginTime?: number, endTime?: number, snapshots?: Array<WdrSnapshotRecord>) { 
        this['total_count'] = totalCount;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['snapshots'] = snapshots;
    }
    public withTotalCount(totalCount: number): WdrSnapshotGroupResult {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withBeginTime(beginTime: number): WdrSnapshotGroupResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): WdrSnapshotGroupResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSnapshots(snapshots: Array<WdrSnapshotRecord>): WdrSnapshotGroupResult {
        this['snapshots'] = snapshots;
        return this;
    }
}