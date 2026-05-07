

export class AIProcessNetInfo {
    private 'listen_ip'?: string;
    private 'listen_protocol'?: string;
    private 'listen_port'?: number;
    private 'listen_status'?: string;
    public constructor() { 
    }
    public withListenIp(listenIp: string): AIProcessNetInfo {
        this['listen_ip'] = listenIp;
        return this;
    }
    public set listenIp(listenIp: string  | undefined) {
        this['listen_ip'] = listenIp;
    }
    public get listenIp(): string | undefined {
        return this['listen_ip'];
    }
    public withListenProtocol(listenProtocol: string): AIProcessNetInfo {
        this['listen_protocol'] = listenProtocol;
        return this;
    }
    public set listenProtocol(listenProtocol: string  | undefined) {
        this['listen_protocol'] = listenProtocol;
    }
    public get listenProtocol(): string | undefined {
        return this['listen_protocol'];
    }
    public withListenPort(listenPort: number): AIProcessNetInfo {
        this['listen_port'] = listenPort;
        return this;
    }
    public set listenPort(listenPort: number  | undefined) {
        this['listen_port'] = listenPort;
    }
    public get listenPort(): number | undefined {
        return this['listen_port'];
    }
    public withListenStatus(listenStatus: string): AIProcessNetInfo {
        this['listen_status'] = listenStatus;
        return this;
    }
    public set listenStatus(listenStatus: string  | undefined) {
        this['listen_status'] = listenStatus;
    }
    public get listenStatus(): string | undefined {
        return this['listen_status'];
    }
}