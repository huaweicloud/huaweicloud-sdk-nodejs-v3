

export class ConnectionDrain {
    public enable?: boolean;
    public timeout?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): ConnectionDrain {
        this['enable'] = enable;
        return this;
    }
    public withTimeout(timeout: number): ConnectionDrain {
        this['timeout'] = timeout;
        return this;
    }
}