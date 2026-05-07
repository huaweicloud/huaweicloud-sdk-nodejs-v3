

export class FailReasons {
    public reason?: string;
    private 'host_id'?: string;
    public constructor() { 
    }
    public withReason(reason: string): FailReasons {
        this['reason'] = reason;
        return this;
    }
    public withHostId(hostId: string): FailReasons {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}