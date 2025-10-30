

export class LocalImageHostInfo {
    private 'agent_id'?: string;
    private 'agent_status'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    public version?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'docker_name'?: string;
    private 'docker_type'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): LocalImageHostInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentStatus(agentStatus: string): LocalImageHostInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withHostName(hostName: string): LocalImageHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): LocalImageHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVersion(version: string): LocalImageHostInfo {
        this['version'] = version;
        return this;
    }
    public withPrivateIp(privateIp: string): LocalImageHostInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): LocalImageHostInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withDockerName(dockerName: string): LocalImageHostInfo {
        this['docker_name'] = dockerName;
        return this;
    }
    public set dockerName(dockerName: string  | undefined) {
        this['docker_name'] = dockerName;
    }
    public get dockerName(): string | undefined {
        return this['docker_name'];
    }
    public withDockerType(dockerType: string): LocalImageHostInfo {
        this['docker_type'] = dockerType;
        return this;
    }
    public set dockerType(dockerType: string  | undefined) {
        this['docker_type'] = dockerType;
    }
    public get dockerType(): string | undefined {
        return this['docker_type'];
    }
}