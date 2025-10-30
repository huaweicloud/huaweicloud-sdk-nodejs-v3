

export class CreateGlobalAssetScanTaskRequestInfo {
    private 'host_ids'?: Array<string>;
    private 'server_group'?: Array<string>;
    private 'all_hosts'?: boolean;
    public constructor() { 
    }
    public withHostIds(hostIds: Array<string>): CreateGlobalAssetScanTaskRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withServerGroup(serverGroup: Array<string>): CreateGlobalAssetScanTaskRequestInfo {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: Array<string>  | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup(): Array<string> | undefined {
        return this['server_group'];
    }
    public withAllHosts(allHosts: boolean): CreateGlobalAssetScanTaskRequestInfo {
        this['all_hosts'] = allHosts;
        return this;
    }
    public set allHosts(allHosts: boolean  | undefined) {
        this['all_hosts'] = allHosts;
    }
    public get allHosts(): boolean | undefined {
        return this['all_hosts'];
    }
}