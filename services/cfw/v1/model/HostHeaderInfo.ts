

export class HostHeaderInfo {
    private 'Host'?: string;
    public constructor() { 
    }
    public withHost(host: string): HostHeaderInfo {
        this['Host'] = host;
        return this;
    }
    public set host(host: string  | undefined) {
        this['Host'] = host;
    }
    public get host(): string | undefined {
        return this['Host'];
    }
}