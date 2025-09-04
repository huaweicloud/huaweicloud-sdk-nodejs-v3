

export class UpdateBackupDownloadPolicyRequestBody {
    public id?: string;
    public action?: string;
    public constructor(id?: string, action?: string) { 
        this['id'] = id;
        this['action'] = action;
    }
    public withId(id: string): UpdateBackupDownloadPolicyRequestBody {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): UpdateBackupDownloadPolicyRequestBody {
        this['action'] = action;
        return this;
    }
}