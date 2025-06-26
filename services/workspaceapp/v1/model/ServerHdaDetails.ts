import { ServerStatus } from './ServerStatus';


export class ServerHdaDetails {
    private 'server_id'?: string;
    private 'machine_name'?: string;
    private 'maintain_status'?: boolean;
    private 'server_name'?: string;
    private 'server_group_id'?: string;
    private 'server_group_name'?: string;
    public sid?: string;
    private 'session_count'?: number;
    public status?: ServerStatus;
    private 'current_version'?: string;
    public constructor() { 
    }
    public withServerId(serverId: string): ServerHdaDetails {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withMachineName(machineName: string): ServerHdaDetails {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withMaintainStatus(maintainStatus: boolean): ServerHdaDetails {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: boolean  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): boolean | undefined {
        return this['maintain_status'];
    }
    public withServerName(serverName: string): ServerHdaDetails {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerGroupId(serverGroupId: string): ServerHdaDetails {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withServerGroupName(serverGroupName: string): ServerHdaDetails {
        this['server_group_name'] = serverGroupName;
        return this;
    }
    public set serverGroupName(serverGroupName: string  | undefined) {
        this['server_group_name'] = serverGroupName;
    }
    public get serverGroupName(): string | undefined {
        return this['server_group_name'];
    }
    public withSid(sid: string): ServerHdaDetails {
        this['sid'] = sid;
        return this;
    }
    public withSessionCount(sessionCount: number): ServerHdaDetails {
        this['session_count'] = sessionCount;
        return this;
    }
    public set sessionCount(sessionCount: number  | undefined) {
        this['session_count'] = sessionCount;
    }
    public get sessionCount(): number | undefined {
        return this['session_count'];
    }
    public withStatus(status: ServerStatus): ServerHdaDetails {
        this['status'] = status;
        return this;
    }
    public withCurrentVersion(currentVersion: string): ServerHdaDetails {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
}