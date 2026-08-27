

export class ExportDesktopVersionListRequest {
    private 'agent_version'?: string;
    private 'os_type'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    public username?: string;
    public language?: ExportDesktopVersionListRequestLanguageEnum | string;
    public constructor(agentVersion?: string, osType?: string, language?: string) { 
        this['agent_version'] = agentVersion;
        this['os_type'] = osType;
        this['language'] = language;
    }
    public withAgentVersion(agentVersion: string): ExportDesktopVersionListRequest {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withOsType(osType: string): ExportDesktopVersionListRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withDesktopId(desktopId: string): ExportDesktopVersionListRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ExportDesktopVersionListRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withUsername(username: string): ExportDesktopVersionListRequest {
        this['username'] = username;
        return this;
    }
    public withLanguage(language: ExportDesktopVersionListRequestLanguageEnum | string): ExportDesktopVersionListRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportDesktopVersionListRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
