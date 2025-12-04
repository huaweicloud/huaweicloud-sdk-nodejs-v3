import { DedicatedHostTypeOffering } from './DedicatedHostTypeOffering';
import { PageInfo } from './PageInfo';


export class DedicatedHostType {
    private 'host_type'?: string;
    public vcpus?: number;
    public cores?: number;
    public sockets?: number;
    public memory?: number;
    private 'supported_flavors'?: Array<string>;
    public category?: string;
    private 'availability_zone_offerings'?: Array<DedicatedHostTypeOffering>;
    private 'page_info'?: PageInfo;
    public constructor(hostType?: string, vcpus?: number, cores?: number, sockets?: number, memory?: number, supportedFlavors?: Array<string>, category?: string, pageInfo?: PageInfo) { 
        this['host_type'] = hostType;
        this['vcpus'] = vcpus;
        this['cores'] = cores;
        this['sockets'] = sockets;
        this['memory'] = memory;
        this['supported_flavors'] = supportedFlavors;
        this['category'] = category;
        this['page_info'] = pageInfo;
    }
    public withHostType(hostType: string): DedicatedHostType {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withVcpus(vcpus: number): DedicatedHostType {
        this['vcpus'] = vcpus;
        return this;
    }
    public withCores(cores: number): DedicatedHostType {
        this['cores'] = cores;
        return this;
    }
    public withSockets(sockets: number): DedicatedHostType {
        this['sockets'] = sockets;
        return this;
    }
    public withMemory(memory: number): DedicatedHostType {
        this['memory'] = memory;
        return this;
    }
    public withSupportedFlavors(supportedFlavors: Array<string>): DedicatedHostType {
        this['supported_flavors'] = supportedFlavors;
        return this;
    }
    public set supportedFlavors(supportedFlavors: Array<string>  | undefined) {
        this['supported_flavors'] = supportedFlavors;
    }
    public get supportedFlavors(): Array<string> | undefined {
        return this['supported_flavors'];
    }
    public withCategory(category: string): DedicatedHostType {
        this['category'] = category;
        return this;
    }
    public withAvailabilityZoneOfferings(availabilityZoneOfferings: Array<DedicatedHostTypeOffering>): DedicatedHostType {
        this['availability_zone_offerings'] = availabilityZoneOfferings;
        return this;
    }
    public set availabilityZoneOfferings(availabilityZoneOfferings: Array<DedicatedHostTypeOffering>  | undefined) {
        this['availability_zone_offerings'] = availabilityZoneOfferings;
    }
    public get availabilityZoneOfferings(): Array<DedicatedHostTypeOffering> | undefined {
        return this['availability_zone_offerings'];
    }
    public withPageInfo(pageInfo: PageInfo): DedicatedHostType {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}