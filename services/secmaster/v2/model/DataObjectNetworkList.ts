import { AlertDestGeo } from './AlertDestGeo';
import { AlertSrcGeo } from './AlertSrcGeo';


export class DataObjectNetworkList {
    public direction?: DataObjectNetworkListDirectionEnum | string;
    public protocol?: string;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'src_domain'?: string;
    private 'src_geo'?: AlertSrcGeo;
    private 'dest_ip'?: string;
    private 'dest_port'?: string;
    private 'dest_domain'?: string;
    private 'dest_geo'?: AlertDestGeo;
    public constructor() { 
    }
    public withDirection(direction: DataObjectNetworkListDirectionEnum | string): DataObjectNetworkList {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): DataObjectNetworkList {
        this['protocol'] = protocol;
        return this;
    }
    public withSrcIp(srcIp: string): DataObjectNetworkList {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): DataObjectNetworkList {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withSrcDomain(srcDomain: string): DataObjectNetworkList {
        this['src_domain'] = srcDomain;
        return this;
    }
    public set srcDomain(srcDomain: string  | undefined) {
        this['src_domain'] = srcDomain;
    }
    public get srcDomain(): string | undefined {
        return this['src_domain'];
    }
    public withSrcGeo(srcGeo: AlertSrcGeo): DataObjectNetworkList {
        this['src_geo'] = srcGeo;
        return this;
    }
    public set srcGeo(srcGeo: AlertSrcGeo  | undefined) {
        this['src_geo'] = srcGeo;
    }
    public get srcGeo(): AlertSrcGeo | undefined {
        return this['src_geo'];
    }
    public withDestIp(destIp: string): DataObjectNetworkList {
        this['dest_ip'] = destIp;
        return this;
    }
    public set destIp(destIp: string  | undefined) {
        this['dest_ip'] = destIp;
    }
    public get destIp(): string | undefined {
        return this['dest_ip'];
    }
    public withDestPort(destPort: string): DataObjectNetworkList {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withDestDomain(destDomain: string): DataObjectNetworkList {
        this['dest_domain'] = destDomain;
        return this;
    }
    public set destDomain(destDomain: string  | undefined) {
        this['dest_domain'] = destDomain;
    }
    public get destDomain(): string | undefined {
        return this['dest_domain'];
    }
    public withDestGeo(destGeo: AlertDestGeo): DataObjectNetworkList {
        this['dest_geo'] = destGeo;
        return this;
    }
    public set destGeo(destGeo: AlertDestGeo  | undefined) {
        this['dest_geo'] = destGeo;
    }
    public get destGeo(): AlertDestGeo | undefined {
        return this['dest_geo'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataObjectNetworkListDirectionEnum {
    IN = 'IN',
    OUT = 'OUT'
}
