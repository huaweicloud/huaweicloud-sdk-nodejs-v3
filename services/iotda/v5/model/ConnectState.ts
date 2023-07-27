

export class ConnectState {
    private 'last_update_time'?: string;
    public status?: string;
    public constructor() { 
    }
    public withLastUpdateTime(lastUpdateTime: string): ConnectState {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withStatus(status: string): ConnectState {
        this['status'] = status;
        return this;
    }
}