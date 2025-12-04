

export class Port {
    public name?: string;
    private 'listen_port'?: number;
    private 'internet_accessible'?: string;
    public constructor(name?: string, listenPort?: number, internetAccessible?: string) { 
        this['name'] = name;
        this['listen_port'] = listenPort;
        this['internet_accessible'] = internetAccessible;
    }
    public withName(name: string): Port {
        this['name'] = name;
        return this;
    }
    public withListenPort(listenPort: number): Port {
        this['listen_port'] = listenPort;
        return this;
    }
    public set listenPort(listenPort: number  | undefined) {
        this['listen_port'] = listenPort;
    }
    public get listenPort(): number | undefined {
        return this['listen_port'];
    }
    public withInternetAccessible(internetAccessible: string): Port {
        this['internet_accessible'] = internetAccessible;
        return this;
    }
    public set internetAccessible(internetAccessible: string  | undefined) {
        this['internet_accessible'] = internetAccessible;
    }
    public get internetAccessible(): string | undefined {
        return this['internet_accessible'];
    }
}