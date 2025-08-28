

export class WebSiteInfo {
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
    private 'cert_user'?: number;
    private 'cert_issue_time'?: string;
    private 'cert_expired_time'?: string;
    private 'record_time'?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withDomain(domain: string): WebSiteInfo {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): WebSiteInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withPath(path: string): WebSiteInfo {
        this['path'] = path;
        return this;
    }
    public withPort(port: number): WebSiteInfo {
        this['port'] = port;
        return this;
    }
    public withBindAddr(bindAddr: string): WebSiteInfo {
        this['bind_addr'] = bindAddr;
        return this;
    }
    public set bindAddr(bindAddr: string  | undefined) {
        this['bind_addr'] = bindAddr;
    }
    public get bindAddr(): string | undefined {
        return this['bind_addr'];
    }
    public withUrlPath(urlPath: string): WebSiteInfo {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
    public withUid(uid: number): WebSiteInfo {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): WebSiteInfo {
        this['gid'] = gid;
        return this;
    }
    public withMode(mode: string): WebSiteInfo {
        this['mode'] = mode;
        return this;
    }
    public withPid(pid: number): WebSiteInfo {
        this['pid'] = pid;
        return this;
    }
    public withProcPath(procPath: string): WebSiteInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withIsHttps(isHttps: boolean): WebSiteInfo {
        this['is_https'] = isHttps;
        return this;
    }
    public set isHttps(isHttps: boolean  | undefined) {
        this['is_https'] = isHttps;
    }
    public get isHttps(): boolean | undefined {
        return this['is_https'];
    }
    public withCertIssuer(certIssuer: string): WebSiteInfo {
        this['cert_issuer'] = certIssuer;
        return this;
    }
    public set certIssuer(certIssuer: string  | undefined) {
        this['cert_issuer'] = certIssuer;
    }
    public get certIssuer(): string | undefined {
        return this['cert_issuer'];
    }
    public withCertUser(certUser: number): WebSiteInfo {
        this['cert_user'] = certUser;
        return this;
    }
    public set certUser(certUser: number  | undefined) {
        this['cert_user'] = certUser;
    }
    public get certUser(): number | undefined {
        return this['cert_user'];
    }
    public withCertIssueTime(certIssueTime: string): WebSiteInfo {
        this['cert_issue_time'] = certIssueTime;
        return this;
    }
    public set certIssueTime(certIssueTime: string  | undefined) {
        this['cert_issue_time'] = certIssueTime;
    }
    public get certIssueTime(): string | undefined {
        return this['cert_issue_time'];
    }
    public withCertExpiredTime(certExpiredTime: string): WebSiteInfo {
        this['cert_expired_time'] = certExpiredTime;
        return this;
    }
    public set certExpiredTime(certExpiredTime: string  | undefined) {
        this['cert_expired_time'] = certExpiredTime;
    }
    public get certExpiredTime(): string | undefined {
        return this['cert_expired_time'];
    }
    public withRecordTime(recordTime: number): WebSiteInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withContainerId(containerId: string): WebSiteInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebSiteInfo {
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