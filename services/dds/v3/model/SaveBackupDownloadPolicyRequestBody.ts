

export class SaveBackupDownloadPolicyRequestBody {
    public action?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): SaveBackupDownloadPolicyRequestBody {
        this['action'] = action;
        return this;
    }
}