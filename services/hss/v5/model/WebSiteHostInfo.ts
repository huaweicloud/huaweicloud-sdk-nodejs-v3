

export class WebSiteHostInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public domain?: string;
    private 'app_name'?: string;
    public path?: string;
    public port?: number;
    private 'bind_addr'?: string;
    private 'url_path'?: string;
    public uid?: number;
    public gid?: number;
    public mode?: string;
    public pid?: number;
    private 'proc_path'?: string;
    private 'is_https'?: boolean;
    private 'cert_issuer'?: string;
    private 'cert_user'?: string;
    private 'cert_issue_time'?: string;
    private 'cert_expired_time'?: string;
    private 'record_time'?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): WebSiteHostInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): WebSiteHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): WebSiteHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): WebSiteHostInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withDomain(domain: string): WebSiteHostInfo {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): WebSiteHostInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withPath(path: string): WebSiteHostInfo {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): WebSiteHostInfo {
        this['port'] = port;
        return this;
    }
    public withBindAddr(bindAddr: string): WebSiteHostInfo {
        this['bind_addr'] = bindAddr;
        return this;
    }
    public set bindAddr(bindAddr: string  | undefined) {
        this['bind_addr'] = bindAddr;
    }
    public get bindAddr(): string | undefined {
        return this['bind_addr'];
    }
    public withUrlPath(urlPath: string): WebSiteHostInfo {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
    public withUid(uid: number): WebSiteHostInfo {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): WebSiteHostInfo {
        this['gid'] = gid;
        return this;
    }
    public withMode(mode: string): WebSiteHostInfo {
        this['mode'] = mode;
        return this;
    }
    public withPid(pid: number): WebSiteHostInfo {
        this['pid'] = pid;
        return this;
    }
    public withProcPath(procPath: string): WebSiteHostInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withIsHttps(isHttps: boolean): WebSiteHostInfo {
        this['is_https'] = isHttps;
        return this;
    }
    public set isHttps(isHttps: boolean  | undefined) {
        this['is_https'] = isHttps;
    }
    public get isHttps(): boolean | undefined {
        return this['is_https'];
    }
    public withCertIssuer(certIssuer: string): WebSiteHostInfo {
        this['cert_issuer'] = certIssuer;
        return this;
    }
    public set certIssuer(certIssuer: string  | undefined) {
        this['cert_issuer'] = certIssuer;
    }
    public get certIssuer(): string | undefined {
        return this['cert_issuer'];
    }
    public withCertUser(certUser: string): WebSiteHostInfo {
        this['cert_user'] = certUser;
        return this;
    }
    public set certUser(certUser: string  | undefined) {
        this['cert_user'] = certUser;
    }
    public get certUser(): string | undefined {
        return this['cert_user'];
    }
    public withCertIssueTime(certIssueTime: string): WebSiteHostInfo {
        this['cert_issue_time'] = certIssueTime;
        return this;
    }
    public set certIssueTime(certIssueTime: string  | undefined) {
        this['cert_issue_time'] = certIssueTime;
    }
    public get certIssueTime(): string | undefined {
        return this['cert_issue_time'];
    }
    public withCertExpiredTime(certExpiredTime: string): WebSiteHostInfo {
        this['cert_expired_time'] = certExpiredTime;
        return this;
    }
    public set certExpiredTime(certExpiredTime: string  | undefined) {
        this['cert_expired_time'] = certExpiredTime;
    }
    public get certExpiredTime(): string | undefined {
        return this['cert_expired_time'];
    }
    public withRecordTime(recordTime: number): WebSiteHostInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withContainerId(containerId: string): WebSiteHostInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebSiteHostInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
}