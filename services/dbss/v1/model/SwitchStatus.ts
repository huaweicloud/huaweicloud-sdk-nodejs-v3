

export class SwitchStatus {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): SwitchStatus {
        this['status'] = status;
        return this;
    }
}