import { Path } from './Path';


export class Agent {
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'agent_id': string | undefined;
    private 'agent_version'?: string | undefined;
    private 'agent_type'?: string | undefined;
    private 'host_name'?: string | undefined;
    private 'host_nickname'?: string | undefined;
    private 'host_ip'?: string | undefined;
    private 'host_os'?: string | undefined;
    public status?: string;
    private 'last_active_time'?: Date | undefined;
    public paths?: Array<Path>;
    public constructor(agentId?: any) { 
        this['agent_id'] = agentId;
    }
    public withCreatedAt(createdAt: Date): Agent {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Agent {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withAgentId(agentId: string): Agent {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId() {
        return this['agent_id'];
    }
    public withAgentVersion(agentVersion: string): Agent {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion() {
        return this['agent_version'];
    }
    public withAgentType(agentType: string): Agent {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType() {
        return this['agent_type'];
    }
    public withHostName(hostName: string): Agent {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withHostNickname(hostNickname: string): Agent {
        this['host_nickname'] = hostNickname;
        return this;
    }
    public set hostNickname(hostNickname: string | undefined) {
        this['host_nickname'] = hostNickname;
    }
    public get hostNickname() {
        return this['host_nickname'];
    }
    public withHostIp(hostIp: string): Agent {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp() {
        return this['host_ip'];
    }
    public withHostOs(hostOs: string): Agent {
        this['host_os'] = hostOs;
        return this;
    }
    public set hostOs(hostOs: string | undefined) {
        this['host_os'] = hostOs;
    }
    public get hostOs() {
        return this['host_os'];
    }
    public withStatus(status: string): Agent {
        this['status'] = status;
        return this;
    }
    public withLastActiveTime(lastActiveTime: Date): Agent {
        this['last_active_time'] = lastActiveTime;
        return this;
    }
    public set lastActiveTime(lastActiveTime: Date | undefined) {
        this['last_active_time'] = lastActiveTime;
    }
    public get lastActiveTime() {
        return this['last_active_time'];
    }
    public withPaths(paths: Array<Path>): Agent {
        this['paths'] = paths;
        return this;
    }
}