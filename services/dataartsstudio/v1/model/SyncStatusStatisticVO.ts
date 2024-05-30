

export class SyncStatusStatisticVO {
    public success?: string;
    public failed?: string;
    public running?: string;
    public other?: string;
    public constructor() { 
    }
    public withSuccess(success: string): SyncStatusStatisticVO {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: string): SyncStatusStatisticVO {
        this['failed'] = failed;
        return this;
    }
    public withRunning(running: string): SyncStatusStatisticVO {
        this['running'] = running;
        return this;
    }
    public withOther(other: string): SyncStatusStatisticVO {
        this['other'] = other;
        return this;
    }
}