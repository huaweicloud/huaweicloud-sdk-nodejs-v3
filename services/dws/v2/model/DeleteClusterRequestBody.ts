

export class DeleteClusterRequestBody {
    private 'keep_last_manual_snapshot': number | undefined;
    public constructor(keepLastManualSnapshot?: any) { 
        this['keep_last_manual_snapshot'] = keepLastManualSnapshot;
    }
    public withKeepLastManualSnapshot(keepLastManualSnapshot: number): DeleteClusterRequestBody {
        this['keep_last_manual_snapshot'] = keepLastManualSnapshot;
        return this;
    }
    public set keepLastManualSnapshot(keepLastManualSnapshot: number | undefined) {
        this['keep_last_manual_snapshot'] = keepLastManualSnapshot;
    }
    public get keepLastManualSnapshot() {
        return this['keep_last_manual_snapshot'];
    }
}