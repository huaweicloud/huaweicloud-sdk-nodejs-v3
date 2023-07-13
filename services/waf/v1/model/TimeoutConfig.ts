

export class TimeoutConfig {
    private 'connect_timeout'?: number | undefined;
    private 'send_timeout'?: number | undefined;
    private 'read_timeout'?: number | undefined;
    public constructor() { 
    }
    public withConnectTimeout(connectTimeout: number): TimeoutConfig {
        this['connect_timeout'] = connectTimeout;
        return this;
    }
    public set connectTimeout(connectTimeout: number | undefined) {
        this['connect_timeout'] = connectTimeout;
    }
    public get connectTimeout() {
        return this['connect_timeout'];
    }
    public withSendTimeout(sendTimeout: number): TimeoutConfig {
        this['send_timeout'] = sendTimeout;
        return this;
    }
    public set sendTimeout(sendTimeout: number | undefined) {
        this['send_timeout'] = sendTimeout;
    }
    public get sendTimeout() {
        return this['send_timeout'];
    }
    public withReadTimeout(readTimeout: number): TimeoutConfig {
        this['read_timeout'] = readTimeout;
        return this;
    }
    public set readTimeout(readTimeout: number | undefined) {
        this['read_timeout'] = readTimeout;
    }
    public get readTimeout() {
        return this['read_timeout'];
    }
}