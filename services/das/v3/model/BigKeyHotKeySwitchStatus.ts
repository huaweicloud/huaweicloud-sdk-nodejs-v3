

export class BigKeyHotKeySwitchStatus {
    private 'open_status'?: number;
    private 'retention_hours'?: number;
    private 'can_open'?: boolean;
    private 'cant_open_msg'?: string;
    private 'last_open_time'?: number;
    public constructor() { 
    }
    public withOpenStatus(openStatus: number): BigKeyHotKeySwitchStatus {
        this['open_status'] = openStatus;
        return this;
    }
    public set openStatus(openStatus: number  | undefined) {
        this['open_status'] = openStatus;
    }
    public get openStatus(): number | undefined {
        return this['open_status'];
    }
    public withRetentionHours(retentionHours: number): BigKeyHotKeySwitchStatus {
        this['retention_hours'] = retentionHours;
        return this;
    }
    public set retentionHours(retentionHours: number  | undefined) {
        this['retention_hours'] = retentionHours;
    }
    public get retentionHours(): number | undefined {
        return this['retention_hours'];
    }
    public withCanOpen(canOpen: boolean): BigKeyHotKeySwitchStatus {
        this['can_open'] = canOpen;
        return this;
    }
    public set canOpen(canOpen: boolean  | undefined) {
        this['can_open'] = canOpen;
    }
    public get canOpen(): boolean | undefined {
        return this['can_open'];
    }
    public withCantOpenMsg(cantOpenMsg: string): BigKeyHotKeySwitchStatus {
        this['cant_open_msg'] = cantOpenMsg;
        return this;
    }
    public set cantOpenMsg(cantOpenMsg: string  | undefined) {
        this['cant_open_msg'] = cantOpenMsg;
    }
    public get cantOpenMsg(): string | undefined {
        return this['cant_open_msg'];
    }
    public withLastOpenTime(lastOpenTime: number): BigKeyHotKeySwitchStatus {
        this['last_open_time'] = lastOpenTime;
        return this;
    }
    public set lastOpenTime(lastOpenTime: number  | undefined) {
        this['last_open_time'] = lastOpenTime;
    }
    public get lastOpenTime(): number | undefined {
        return this['last_open_time'];
    }
}