import { EncodeServerAccessInfo } from './EncodeServerAccessInfo';


export class EncodeServer {
    private 'encode_server_name'?: string;
    private 'encode_server_id'?: string;
    private 'encode_server_ip'?: string;
    private 'server_id'?: string;
    private 'keypair_name'?: string;
    public type?: number;
    public status?: number;
    private 'access_infos'?: Array<EncodeServerAccessInfo>;
    private 'encode_server_ipv6'?: string;
    public constructor() { 
    }
    public withEncodeServerName(encodeServerName: string): EncodeServer {
        this['encode_server_name'] = encodeServerName;
        return this;
    }
    public set encodeServerName(encodeServerName: string  | undefined) {
        this['encode_server_name'] = encodeServerName;
    }
    public get encodeServerName(): string | undefined {
        return this['encode_server_name'];
    }
    public withEncodeServerId(encodeServerId: string): EncodeServer {
        this['encode_server_id'] = encodeServerId;
        return this;
    }
    public set encodeServerId(encodeServerId: string  | undefined) {
        this['encode_server_id'] = encodeServerId;
    }
    public get encodeServerId(): string | undefined {
        return this['encode_server_id'];
    }
    public withEncodeServerIp(encodeServerIp: string): EncodeServer {
        this['encode_server_ip'] = encodeServerIp;
        return this;
    }
    public set encodeServerIp(encodeServerIp: string  | undefined) {
        this['encode_server_ip'] = encodeServerIp;
    }
    public get encodeServerIp(): string | undefined {
        return this['encode_server_ip'];
    }
    public withServerId(serverId: string): EncodeServer {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withKeypairName(keypairName: string): EncodeServer {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withType(type: number): EncodeServer {
        this['type'] = type;
        return this;
    }
    public withStatus(status: number): EncodeServer {
        this['status'] = status;
        return this;
    }
    public withAccessInfos(accessInfos: Array<EncodeServerAccessInfo>): EncodeServer {
        this['access_infos'] = accessInfos;
        return this;
    }
    public set accessInfos(accessInfos: Array<EncodeServerAccessInfo>  | undefined) {
        this['access_infos'] = accessInfos;
    }
    public get accessInfos(): Array<EncodeServerAccessInfo> | undefined {
        return this['access_infos'];
    }
    public withEncodeServerIpv6(encodeServerIpv6: string): EncodeServer {
        this['encode_server_ipv6'] = encodeServerIpv6;
        return this;
    }
    public set encodeServerIpv6(encodeServerIpv6: string  | undefined) {
        this['encode_server_ipv6'] = encodeServerIpv6;
    }
    public get encodeServerIpv6(): string | undefined {
        return this['encode_server_ipv6'];
    }
}