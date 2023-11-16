

export class ExecuteUnblockIpRequestBody {
    public ip?: string;
    private 'blocking_time'?: number;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): ExecuteUnblockIpRequestBody {
        this['ip'] = ip;
        return this;
    }
    public withBlockingTime(blockingTime: number): ExecuteUnblockIpRequestBody {
        this['blocking_time'] = blockingTime;
        return this;
    }
    public set blockingTime(blockingTime: number  | undefined) {
        this['blocking_time'] = blockingTime;
    }
    public get blockingTime(): number | undefined {
        return this['blocking_time'];
    }
}