import { VpcBaseInfo } from './VpcBaseInfo';


export class VpcInfo {
    private 'ecs_id'?: string;
    private 'ecs_name'?: string;
    private 'cascade_flag'?: boolean;
    private 'vpc_channel_proxy_host'?: string;
    private 'vpc_channel_id'?: string;
    private 'vpc_channel_port'?: number;
    public constructor() { 
    }
    public withEcsId(ecsId: string): VpcInfo {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string  | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId(): string | undefined {
        return this['ecs_id'];
    }
    public withEcsName(ecsName: string): VpcInfo {
        this['ecs_name'] = ecsName;
        return this;
    }
    public set ecsName(ecsName: string  | undefined) {
        this['ecs_name'] = ecsName;
    }
    public get ecsName(): string | undefined {
        return this['ecs_name'];
    }
    public withCascadeFlag(cascadeFlag: boolean): VpcInfo {
        this['cascade_flag'] = cascadeFlag;
        return this;
    }
    public set cascadeFlag(cascadeFlag: boolean  | undefined) {
        this['cascade_flag'] = cascadeFlag;
    }
    public get cascadeFlag(): boolean | undefined {
        return this['cascade_flag'];
    }
    public withVpcChannelProxyHost(vpcChannelProxyHost: string): VpcInfo {
        this['vpc_channel_proxy_host'] = vpcChannelProxyHost;
        return this;
    }
    public set vpcChannelProxyHost(vpcChannelProxyHost: string  | undefined) {
        this['vpc_channel_proxy_host'] = vpcChannelProxyHost;
    }
    public get vpcChannelProxyHost(): string | undefined {
        return this['vpc_channel_proxy_host'];
    }
    public withVpcChannelId(vpcChannelId: string): VpcInfo {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withVpcChannelPort(vpcChannelPort: number): VpcInfo {
        this['vpc_channel_port'] = vpcChannelPort;
        return this;
    }
    public set vpcChannelPort(vpcChannelPort: number  | undefined) {
        this['vpc_channel_port'] = vpcChannelPort;
    }
    public get vpcChannelPort(): number | undefined {
        return this['vpc_channel_port'];
    }
}