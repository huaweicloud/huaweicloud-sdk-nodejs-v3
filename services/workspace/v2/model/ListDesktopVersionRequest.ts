

export class ListDesktopVersionRequest {
    private 'agent_version'?: string;
    private 'os_type'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    public username?: string;
    public offset?: number;
    public limit?: number;
    public constructor(agentVersion?: string, osType?: string) { 
        this['agent_version'] = agentVersion;
        this['os_type'] = osType;
    }
    public withAgentVersion(agentVersion: string): ListDesktopVersionRequest {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withOsType(osType: string): ListDesktopVersionRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withDesktopId(desktopId: string): ListDesktopVersionRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ListDesktopVersionRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withUsername(username: string): ListDesktopVersionRequest {
        this['username'] = username;
        return this;
    }
    public withOffset(offset: number): ListDesktopVersionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopVersionRequest {
        this['limit'] = limit;
        return this;
    }
}