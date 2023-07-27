

export class ApiBackendVpcReq {
    private 'vpc_channel_proxy_host'?: string;
    private 'vpc_channel_id'?: string;
    public constructor(vpcChannelId?: string) { 
        this['vpc_channel_id'] = vpcChannelId;
    }
    public withVpcChannelProxyHost(vpcChannelProxyHost: string): ApiBackendVpcReq {
        this['vpc_channel_proxy_host'] = vpcChannelProxyHost;
        return this;
    }
    public set vpcChannelProxyHost(vpcChannelProxyHost: string  | undefined) {
        this['vpc_channel_proxy_host'] = vpcChannelProxyHost;
    }
    public get vpcChannelProxyHost(): string | undefined {
        return this['vpc_channel_proxy_host'];
    }
    public withVpcChannelId(vpcChannelId: string): ApiBackendVpcReq {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
}