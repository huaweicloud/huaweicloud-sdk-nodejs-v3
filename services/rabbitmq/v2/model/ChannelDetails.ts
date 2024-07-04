

export class ChannelDetails {
    public name?: string;
    private 'number'?: number;
    public user?: string;
    private 'connection_name'?: string;
    private 'peer_host'?: string;
    private 'peer_port'?: number;
    public constructor() { 
    }
    public withName(name: string): ChannelDetails {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: number): ChannelDetails {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withUser(user: string): ChannelDetails {
        this['user'] = user;
        return this;
    }
    public withConnectionName(connectionName: string): ChannelDetails {
        this['connection_name'] = connectionName;
        return this;
    }
    public set connectionName(connectionName: string  | undefined) {
        this['connection_name'] = connectionName;
    }
    public get connectionName(): string | undefined {
        return this['connection_name'];
    }
    public withPeerHost(peerHost: string): ChannelDetails {
        this['peer_host'] = peerHost;
        return this;
    }
    public set peerHost(peerHost: string  | undefined) {
        this['peer_host'] = peerHost;
    }
    public get peerHost(): string | undefined {
        return this['peer_host'];
    }
    public withPeerPort(peerPort: number): ChannelDetails {
        this['peer_port'] = peerPort;
        return this;
    }
    public set peerPort(peerPort: number  | undefined) {
        this['peer_port'] = peerPort;
    }
    public get peerPort(): number | undefined {
        return this['peer_port'];
    }
}