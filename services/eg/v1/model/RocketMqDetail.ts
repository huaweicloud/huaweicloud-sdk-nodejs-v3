

export class RocketMqDetail {
    private 'instance_id'?: string;
    public group?: string;
    public topic?: string;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'namesrv_address'?: string;
    private 'ssl_enable'?: boolean;
    private 'enable_acl'?: boolean;
    public constructor(group?: string, topic?: string, accessKey?: string, secretKey?: string) { 
        this['group'] = group;
        this['topic'] = topic;
        this['access_key'] = accessKey;
        this['secret_key'] = secretKey;
    }
    public withInstanceId(instanceId: string): RocketMqDetail {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): RocketMqDetail {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): RocketMqDetail {
        this['topic'] = topic;
        return this;
    }
    public withAccessKey(accessKey: string): RocketMqDetail {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): RocketMqDetail {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withVpcId(vpcId: string): RocketMqDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): RocketMqDetail {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withNamesrvAddress(namesrvAddress: string): RocketMqDetail {
        this['namesrv_address'] = namesrvAddress;
        return this;
    }
    public set namesrvAddress(namesrvAddress: string  | undefined) {
        this['namesrv_address'] = namesrvAddress;
    }
    public get namesrvAddress(): string | undefined {
        return this['namesrv_address'];
    }
    public withSslEnable(sslEnable: boolean): RocketMqDetail {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withEnableAcl(enableAcl: boolean): RocketMqDetail {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
}