

export class StopBackupRequestBody {
    public action?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): StopBackupRequestBody {
        this['action'] = action;
        return this;
    }
}