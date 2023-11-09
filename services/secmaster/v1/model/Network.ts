import { Geo } from './Geo';


export class Network {
    public direction?: string;
    public protocol?: string;
    private 'src_ip'?: string;
    private 'src_port'?: number;
    private 'src_domain'?: string;
    private 'src_geo'?: Geo;
    private 'dest_ip'?: string;
    private 'dest_port'?: number;
    private 'dest_domain'?: string;
    private 'dest_geo'?: Geo;
    public constructor() { 
    }
    public withDirection(direction: string): Network {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): Network {
        this['protocol'] = protocol;
        return this;
    }
    public withSrcIp(srcIp: string): Network {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): Network {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): number | undefined {
        return this['src_port'];
    }
    public withSrcDomain(srcDomain: string): Network {
        this['src_domain'] = srcDomain;
        return this;
    }
    public set srcDomain(srcDomain: string  | undefined) {
        this['src_domain'] = srcDomain;
    }
    public get srcDomain(): string | undefined {
        return this['src_domain'];
    }
    public withSrcGeo(srcGeo: Geo): Network {
        this['src_geo'] = srcGeo;
        return this;
    }
    public set srcGeo(srcGeo: Geo  | undefined) {
        this['src_geo'] = srcGeo;
    }
    public get srcGeo(): Geo | undefined {
        return this['src_geo'];
    }
    public withDestIp(destIp: string): Network {
        this['dest_ip'] = destIp;
        return this;
    }
    public set destIp(destIp: string  | undefined) {
        this['dest_ip'] = destIp;
    }
    public get destIp(): string | undefined {
        return this['dest_ip'];
    }
    public withDestPort(destPort: number): Network {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: number  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): number | undefined {
        return this['dest_port'];
    }
    public withDestDomain(destDomain: string): Network {
        this['dest_domain'] = destDomain;
        return this;
    }
    public set destDomain(destDomain: string  | undefined) {
        this['dest_domain'] = destDomain;
    }
    public get destDomain(): string | undefined {
        return this['dest_domain'];
    }
    public withDestGeo(destGeo: Geo): Network {
        this['dest_geo'] = destGeo;
        return this;
    }
    public set destGeo(destGeo: Geo  | undefined) {
        this['dest_geo'] = destGeo;
    }
    public get destGeo(): Geo | undefined {
        return this['dest_geo'];
    }
}