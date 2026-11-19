

export class UpdateAutoKillProcessStatusRequestBody {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): UpdateAutoKillProcessStatusRequestBody {
        this['status'] = status;
        return this;
    }
}