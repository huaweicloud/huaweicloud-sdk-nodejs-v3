

export class KafkaConnectionDetail {
    private 'instance_id'?: string;
    public addr?: string;
    private 'security_protocol'?: string;
    private 'enable_sasl_ssl'?: boolean;
    private 'user_name'?: string;
    public password?: string;
    public acks?: KafkaConnectionDetailAcksEnum | string;
    public constructor(instanceId?: string, addr?: string, enableSaslSsl?: boolean) { 
        this['instance_id'] = instanceId;
        this['addr'] = addr;
        this['enable_sasl_ssl'] = enableSaslSsl;
    }
    public withInstanceId(instanceId: string): KafkaConnectionDetail {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAddr(addr: string): KafkaConnectionDetail {
        this['addr'] = addr;
        return this;
    }
    public withSecurityProtocol(securityProtocol: string): KafkaConnectionDetail {
        this['security_protocol'] = securityProtocol;
        return this;
    }
    public set securityProtocol(securityProtocol: string  | undefined) {
        this['security_protocol'] = securityProtocol;
    }
    public get securityProtocol(): string | undefined {
        return this['security_protocol'];
    }
    public withEnableSaslSsl(enableSaslSsl: boolean): KafkaConnectionDetail {
        this['enable_sasl_ssl'] = enableSaslSsl;
        return this;
    }
    public set enableSaslSsl(enableSaslSsl: boolean  | undefined) {
        this['enable_sasl_ssl'] = enableSaslSsl;
    }
    public get enableSaslSsl(): boolean | undefined {
        return this['enable_sasl_ssl'];
    }
    public withUserName(userName: string): KafkaConnectionDetail {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): KafkaConnectionDetail {
        this['password'] = password;
        return this;
    }
    public withAcks(acks: KafkaConnectionDetailAcksEnum | string): KafkaConnectionDetail {
        this['acks'] = acks;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KafkaConnectionDetailAcksEnum {
    E_0 = '0',
    E_1 = '1',
    ALL = 'all'
}
