

export class GetHostListFilter {
    private 'host_name_list'?: Array<string> | undefined;
    private 'host_ip_list'?: Array<string> | undefined;
    private 'host_status'?: GetHostListFilterHostStatusEnum | undefined;
    private 'host_version'?: string | undefined;
    public constructor() { 
    }
    public withHostNameList(hostNameList: Array<string>): GetHostListFilter {
        this['host_name_list'] = hostNameList;
        return this;
    }
    public set hostNameList(hostNameList: Array<string> | undefined) {
        this['host_name_list'] = hostNameList;
    }
    public get hostNameList() {
        return this['host_name_list'];
    }
    public withHostIpList(hostIpList: Array<string>): GetHostListFilter {
        this['host_ip_list'] = hostIpList;
        return this;
    }
    public set hostIpList(hostIpList: Array<string> | undefined) {
        this['host_ip_list'] = hostIpList;
    }
    public get hostIpList() {
        return this['host_ip_list'];
    }
    public withHostStatus(hostStatus: GetHostListFilterHostStatusEnum): GetHostListFilter {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: GetHostListFilterHostStatusEnum | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus() {
        return this['host_status'];
    }
    public withHostVersion(hostVersion: string): GetHostListFilter {
        this['host_version'] = hostVersion;
        return this;
    }
    public set hostVersion(hostVersion: string | undefined) {
        this['host_version'] = hostVersion;
    }
    public get hostVersion() {
        return this['host_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHostListFilterHostStatusEnum {
    UNINSTALL = 'uninstall',
    RUNNING = 'running',
    OFFLINE = 'offline',
    ERROR = 'error',
    PLUGIN_ERROR = 'plugin error',
    INSTALLING = 'installing',
    INSTALL_FAIL = 'install-fail',
    UPGRADING = 'upgrading',
    UPGRADING_TRANSIENT = 'upgrading-transient',
    UPGRADE_FAILED = 'upgrade failed',
    UPGRADE_FAIL = 'upgrade-fail',
    UNINSTALLING = 'uninstalling',
    UNINSTALLING_TRANSIENT = 'uninstalling-transient',
    AUTHENTICATION_ERROR = 'authentication error'
}
