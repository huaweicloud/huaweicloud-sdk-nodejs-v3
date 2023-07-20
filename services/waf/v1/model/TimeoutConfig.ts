

export class TimeoutConfig {
    private 'connect_timeout'?: number;
    private 'send_timeout'?: number;
    private 'read_timeout'?: number;
    public constructor() { 
    }
    public withConnectTimeout(connectTimeout: number): TimeoutConfig {
        this['connect_timeout'] = connectTimeout;
        return this;
    }
    public set connectTimeout(connectTimeout: number  | undefined) {
        this['connect_timeout'] = connectTimeout;
    }
    public get connectTimeout(): number | undefined {
        return this['connect_timeout'];
    }
    public withSendTimeout(sendTimeout: number): TimeoutConfig {
        this['send_timeout'] = sendTimeout;
        return this;
    }
    public set sendTimeout(sendTimeout: number  | undefined) {
        this['send_timeout'] = sendTimeout;
    }
    public get sendTimeout(): number | undefined {
        return this['send_timeout'];
    }
    public withReadTimeout(readTimeout: number): TimeoutConfig {
        this['read_timeout'] = readTimeout;
        return this;
    }
    public set readTimeout(readTimeout: number  | undefined) {
        this['read_timeout'] = readTimeout;
    }
    public get readTimeout(): number | undefined {
        return this['read_timeout'];
    }
}