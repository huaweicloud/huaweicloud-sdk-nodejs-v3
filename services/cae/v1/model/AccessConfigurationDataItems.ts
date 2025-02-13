import { AccessConfigurationMetadata } from './AccessConfigurationMetadata';
import { AccessConfigurationPort } from './AccessConfigurationPort';
import { AccessControl } from './AccessControl';


export class AccessConfigurationDataItems {
    public operator?: string;
    public uid?: string;
    public metadata?: AccessConfigurationMetadata;
    public type?: AccessConfigurationDataItemsTypeEnum | string;
    private 'domain_names'?: Array<string>;
    private 'access_control'?: AccessControl;
    public ports?: Array<AccessConfigurationPort>;
    private 'elb_id'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    public constructor() { 
    }
    public withOperator(operator: string): AccessConfigurationDataItems {
        this['operator'] = operator;
        return this;
    }
    public withUid(uid: string): AccessConfigurationDataItems {
        this['uid'] = uid;
        return this;
    }
    public withMetadata(metadata: AccessConfigurationMetadata): AccessConfigurationDataItems {
        this['metadata'] = metadata;
        return this;
    }
    public withType(type: AccessConfigurationDataItemsTypeEnum | string): AccessConfigurationDataItems {
        this['type'] = type;
        return this;
    }
    public withDomainNames(domainNames: Array<string>): AccessConfigurationDataItems {
        this['domain_names'] = domainNames;
        return this;
    }
    public set domainNames(domainNames: Array<string>  | undefined) {
        this['domain_names'] = domainNames;
    }
    public get domainNames(): Array<string> | undefined {
        return this['domain_names'];
    }
    public withAccessControl(accessControl: AccessControl): AccessConfigurationDataItems {
        this['access_control'] = accessControl;
        return this;
    }
    public set accessControl(accessControl: AccessControl  | undefined) {
        this['access_control'] = accessControl;
    }
    public get accessControl(): AccessControl | undefined {
        return this['access_control'];
    }
    public withPorts(ports: Array<AccessConfigurationPort>): AccessConfigurationDataItems {
        this['ports'] = ports;
        return this;
    }
    public withElbId(elbId: string): AccessConfigurationDataItems {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
    public withPublicIp(publicIp: string): AccessConfigurationDataItems {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): AccessConfigurationDataItems {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigurationDataItemsTypeEnum {
    CLUSTERIP = 'ClusterIP',
    LOADBALANCER = 'LoadBalancer',
    INGRESS = 'Ingress'
}
