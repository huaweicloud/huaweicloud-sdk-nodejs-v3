import { VersionList } from './VersionList';


export class AgentVersionResponseInfo {
    private 'os_type'?: string;
    private 'latest_version'?: string;
    private 'version_list'?: Array<VersionList>;
    public constructor() { 
    }
    public withOsType(osType: string): AgentVersionResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withLatestVersion(latestVersion: string): AgentVersionResponseInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withVersionList(versionList: Array<VersionList>): AgentVersionResponseInfo {
        this['version_list'] = versionList;
        return this;
    }
    public set versionList(versionList: Array<VersionList>  | undefined) {
        this['version_list'] = versionList;
    }
    public get versionList(): Array<VersionList> | undefined {
        return this['version_list'];
    }
}