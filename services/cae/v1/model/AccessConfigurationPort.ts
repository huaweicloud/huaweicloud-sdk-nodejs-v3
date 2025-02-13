import { AccessConfigurationHttpPath } from './AccessConfigurationHttpPath';


export class AccessConfigurationPort {
    public operator?: string;
    public uid?: string;
    private 'target_port'?: number;
    public port?: number;
    public protocol?: AccessConfigurationPortProtocolEnum | string;
    private 'default_certificate'?: string;
    public certificate?: string;
    public policy?: AccessConfigurationPortPolicyEnum | string;
    public paths?: Array<AccessConfigurationHttpPath>;
    private 'elb_id'?: string;
    public constructor() { 
    }
    public withOperator(operator: string): AccessConfigurationPort {
        this['operator'] = operator;
        return this;
    }
    public withUid(uid: string): AccessConfigurationPort {
        this['uid'] = uid;
        return this;
    }
    public withTargetPort(targetPort: number): AccessConfigurationPort {
        this['target_port'] = targetPort;
        return this;
    }
    public set targetPort(targetPort: number  | undefined) {
        this['target_port'] = targetPort;
    }
    public get targetPort(): number | undefined {
        return this['target_port'];
    }
    public withPort(port: number): AccessConfigurationPort {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: AccessConfigurationPortProtocolEnum | string): AccessConfigurationPort {
        this['protocol'] = protocol;
        return this;
    }
    public withDefaultCertificate(defaultCertificate: string): AccessConfigurationPort {
        this['default_certificate'] = defaultCertificate;
        return this;
    }
    public set defaultCertificate(defaultCertificate: string  | undefined) {
        this['default_certificate'] = defaultCertificate;
    }
    public get defaultCertificate(): string | undefined {
        return this['default_certificate'];
    }
    public withCertificate(certificate: string): AccessConfigurationPort {
        this['certificate'] = certificate;
        return this;
    }
    public withPolicy(policy: AccessConfigurationPortPolicyEnum | string): AccessConfigurationPort {
        this['policy'] = policy;
        return this;
    }
    public withPaths(paths: Array<AccessConfigurationHttpPath>): AccessConfigurationPort {
        this['paths'] = paths;
        return this;
    }
    public withElbId(elbId: string): AccessConfigurationPort {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigurationPortProtocolEnum {
    TCP = 'TCP',
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum AccessConfigurationPortPolicyEnum {
    TLS_1_2_STRICT = 'tls-1-2-strict',
    TLS_1_2 = 'tls-1-2',
    TLS_1_1 = 'tls-1-1',
    TLS_1_0 = 'tls-1-0'
}
