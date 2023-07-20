

export class WebSocketSeek {
    public status?: string;
    public timeout?: number;
    public constructor(status?: string, timeout?: number) { 
        this['status'] = status;
        this['timeout'] = timeout;
    }
    public withStatus(status: string): WebSocketSeek {
        this['status'] = status;
        return this;
    }
    public withTimeout(timeout: number): WebSocketSeek {
        this['timeout'] = timeout;
        return this;
    }
}