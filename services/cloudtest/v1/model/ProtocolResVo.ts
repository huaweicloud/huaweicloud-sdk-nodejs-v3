

export class ProtocolResVo {
    private 'response_code'?: Array<number>;
    private 'response_time'?: string;
    public constructor() { 
    }
    public withResponseCode(responseCode: Array<number>): ProtocolResVo {
        this['response_code'] = responseCode;
        return this;
    }
    public set responseCode(responseCode: Array<number>  | undefined) {
        this['response_code'] = responseCode;
    }
    public get responseCode(): Array<number> | undefined {
        return this['response_code'];
    }
    public withResponseTime(responseTime: string): ProtocolResVo {
        this['response_time'] = responseTime;
        return this;
    }
    public set responseTime(responseTime: string  | undefined) {
        this['response_time'] = responseTime;
    }
    public get responseTime(): string | undefined {
        return this['response_time'];
    }
}