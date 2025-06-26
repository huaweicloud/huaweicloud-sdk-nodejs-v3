

export class ServerGroupStatus {
    private 'aps_status'?: { [key: string]: number; };
    public constructor() { 
    }
    public withApsStatus(apsStatus: { [key: string]: number; }): ServerGroupStatus {
        this['aps_status'] = apsStatus;
        return this;
    }
    public set apsStatus(apsStatus: { [key: string]: number; }  | undefined) {
        this['aps_status'] = apsStatus;
    }
    public get apsStatus(): { [key: string]: number; } | undefined {
        return this['aps_status'];
    }
}