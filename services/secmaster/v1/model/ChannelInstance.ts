import { ConfigStatus } from './ConfigStatus';
import { Monitor } from './Monitor';
import { ReadWrite } from './ReadWrite';


export class ChannelInstance {
    private 'channel_name'?: string;
    private 'config_status'?: ConfigStatus;
    private 'create_by'?: string;
    private 'mini_on_online'?: boolean;
    public monitor?: Monitor;
    private 'node_name'?: string;
    private 'private_ip_address'?: string;
    private 'public_ip_address'?: string;
    private 'read_write'?: ReadWrite;
    public region?: string;
    public constructor() { 
    }
    public withChannelName(channelName: string): ChannelInstance {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withConfigStatus(configStatus: ConfigStatus): ChannelInstance {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: ConfigStatus  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): ConfigStatus | undefined {
        return this['config_status'];
    }
    public withCreateBy(createBy: string): ChannelInstance {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withMiniOnOnline(miniOnOnline: boolean): ChannelInstance {
        this['mini_on_online'] = miniOnOnline;
        return this;
    }
    public set miniOnOnline(miniOnOnline: boolean  | undefined) {
        this['mini_on_online'] = miniOnOnline;
    }
    public get miniOnOnline(): boolean | undefined {
        return this['mini_on_online'];
    }
    public withMonitor(monitor: Monitor): ChannelInstance {
        this['monitor'] = monitor;
        return this;
    }
    public withNodeName(nodeName: string): ChannelInstance {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withPrivateIpAddress(privateIpAddress: string): ChannelInstance {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withPublicIpAddress(publicIpAddress: string): ChannelInstance {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withReadWrite(readWrite: ReadWrite): ChannelInstance {
        this['read_write'] = readWrite;
        return this;
    }
    public set readWrite(readWrite: ReadWrite  | undefined) {
        this['read_write'] = readWrite;
    }
    public get readWrite(): ReadWrite | undefined {
        return this['read_write'];
    }
    public withRegion(region: string): ChannelInstance {
        this['region'] = region;
        return this;
    }
}