import { KernelModuleInfo } from './KernelModuleInfo';


export class KernelModuleHostInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'kernel_module_info'?: KernelModuleInfo;
    public constructor() { 
    }
    public withAgentId(agentId: string): KernelModuleHostInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): KernelModuleHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): KernelModuleHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): KernelModuleHostInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withKernelModuleInfo(kernelModuleInfo: KernelModuleInfo): KernelModuleHostInfo {
        this['kernel_module_info'] = kernelModuleInfo;
        return this;
    }
    public set kernelModuleInfo(kernelModuleInfo: KernelModuleInfo  | undefined) {
        this['kernel_module_info'] = kernelModuleInfo;
    }
    public get kernelModuleInfo(): KernelModuleInfo | undefined {
        return this['kernel_module_info'];
    }
}