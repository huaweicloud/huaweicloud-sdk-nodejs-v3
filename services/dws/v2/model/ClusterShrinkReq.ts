

export class ClusterShrinkReq {
    private 'shrink_number': number | undefined;
    public online: boolean;
    public type: string;
    public retry?: boolean;
    private 'force_backup': boolean | undefined;
    private 'need_agency': boolean | undefined;
    public constructor(shrinkNumber?: any, online?: any, type?: any, forceBackup?: any, needAgency?: any) { 
        this['shrink_number'] = shrinkNumber;
        this['online'] = online;
        this['type'] = type;
        this['force_backup'] = forceBackup;
        this['need_agency'] = needAgency;
    }
    public withShrinkNumber(shrinkNumber: number): ClusterShrinkReq {
        this['shrink_number'] = shrinkNumber;
        return this;
    }
    public set shrinkNumber(shrinkNumber: number | undefined) {
        this['shrink_number'] = shrinkNumber;
    }
    public get shrinkNumber() {
        return this['shrink_number'];
    }
    public withOnline(online: boolean): ClusterShrinkReq {
        this['online'] = online;
        return this;
    }
    public withType(type: string): ClusterShrinkReq {
        this['type'] = type;
        return this;
    }
    public withRetry(retry: boolean): ClusterShrinkReq {
        this['retry'] = retry;
        return this;
    }
    public withForceBackup(forceBackup: boolean): ClusterShrinkReq {
        this['force_backup'] = forceBackup;
        return this;
    }
    public set forceBackup(forceBackup: boolean | undefined) {
        this['force_backup'] = forceBackup;
    }
    public get forceBackup() {
        return this['force_backup'];
    }
    public withNeedAgency(needAgency: boolean): ClusterShrinkReq {
        this['need_agency'] = needAgency;
        return this;
    }
    public set needAgency(needAgency: boolean | undefined) {
        this['need_agency'] = needAgency;
    }
    public get needAgency() {
        return this['need_agency'];
    }
}