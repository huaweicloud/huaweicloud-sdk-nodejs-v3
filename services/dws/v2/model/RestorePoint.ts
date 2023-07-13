

export class RestorePoint {
    private 'back_ref'?: string | undefined;
    private 'restore_time'?: number | undefined;
    private 'cluster_id'?: string | undefined;
    public constructor() { 
    }
    public withBackRef(backRef: string): RestorePoint {
        this['back_ref'] = backRef;
        return this;
    }
    public set backRef(backRef: string | undefined) {
        this['back_ref'] = backRef;
    }
    public get backRef() {
        return this['back_ref'];
    }
    public withRestoreTime(restoreTime: number): RestorePoint {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime() {
        return this['restore_time'];
    }
    public withClusterId(clusterId: string): RestorePoint {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
}