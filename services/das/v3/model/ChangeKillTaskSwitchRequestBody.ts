

export class ChangeKillTaskSwitchRequestBody {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): ChangeKillTaskSwitchRequestBody {
        this['status'] = status;
        return this;
    }
}