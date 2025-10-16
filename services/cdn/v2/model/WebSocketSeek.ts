

export class WebSocketSeek {
    public status?: string;
    public timeout?: number;
    public constructor(status?: string) { 
        this['status'] = status;
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