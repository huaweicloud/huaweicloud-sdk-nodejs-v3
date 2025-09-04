import { NPUDetailsDTO } from './NPUDetailsDTO';
import { Nic } from './Nic';


export class HostInfoDTO {
    private 'host_tag'?: string;
    private 'host_status'?: string;
    private 'os_name'?: string;
    private 'host_name'?: string;
    private 'container_version'?: string;
    public nics?: Array<Nic>;
    public specification?: string;
    private 'npu_details'?: Array<NPUDetailsDTO>;
    public constructor() { 
    }
    public withHostTag(hostTag: string): HostInfoDTO {
        this['host_tag'] = hostTag;
        return this;
    }
    public set hostTag(hostTag: string  | undefined) {
        this['host_tag'] = hostTag;
    }
    public get hostTag(): string | undefined {
        return this['host_tag'];
    }
    public withHostStatus(hostStatus: string): HostInfoDTO {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withOsName(osName: string): HostInfoDTO {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withHostName(hostName: string): HostInfoDTO {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withContainerVersion(containerVersion: string): HostInfoDTO {
        this['container_version'] = containerVersion;
        return this;
    }
    public set containerVersion(containerVersion: string  | undefined) {
        this['container_version'] = containerVersion;
    }
    public get containerVersion(): string | undefined {
        return this['container_version'];
    }
    public withNics(nics: Array<Nic>): HostInfoDTO {
        this['nics'] = nics;
        return this;
    }
    public withSpecification(specification: string): HostInfoDTO {
        this['specification'] = specification;
        return this;
    }
    public withNpuDetails(npuDetails: Array<NPUDetailsDTO>): HostInfoDTO {
        this['npu_details'] = npuDetails;
        return this;
    }
    public set npuDetails(npuDetails: Array<NPUDetailsDTO>  | undefined) {
        this['npu_details'] = npuDetails;
    }
    public get npuDetails(): Array<NPUDetailsDTO> | undefined {
        return this['npu_details'];
    }
}