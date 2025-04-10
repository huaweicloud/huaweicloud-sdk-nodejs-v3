

export class ServerAppStatusResponseInfo {
    private 'web_midware'?: string;
    private 'jdk_version'?: string;
    private 'port_list'?: Array<number>;
    public pid?: number;
    private 'cmd_line'?: string;
    private 'error_info'?: string;
    private 'start_time'?: string;
    private 'app_protect_status'?: number;
    private 'chk_feature_name'?: string;
    public constructor() { 
    }
    public withWebMidware(webMidware: string): ServerAppStatusResponseInfo {
        this['web_midware'] = webMidware;
        return this;
    }
    public set webMidware(webMidware: string  | undefined) {
        this['web_midware'] = webMidware;
    }
    public get webMidware(): string | undefined {
        return this['web_midware'];
    }
    public withJdkVersion(jdkVersion: string): ServerAppStatusResponseInfo {
        this['jdk_version'] = jdkVersion;
        return this;
    }
    public set jdkVersion(jdkVersion: string  | undefined) {
        this['jdk_version'] = jdkVersion;
    }
    public get jdkVersion(): string | undefined {
        return this['jdk_version'];
    }
    public withPortList(portList: Array<number>): ServerAppStatusResponseInfo {
        this['port_list'] = portList;
        return this;
    }
    public set portList(portList: Array<number>  | undefined) {
        this['port_list'] = portList;
    }
    public get portList(): Array<number> | undefined {
        return this['port_list'];
    }
    public withPid(pid: number): ServerAppStatusResponseInfo {
        this['pid'] = pid;
        return this;
    }
    public withCmdLine(cmdLine: string): ServerAppStatusResponseInfo {
        this['cmd_line'] = cmdLine;
        return this;
    }
    public set cmdLine(cmdLine: string  | undefined) {
        this['cmd_line'] = cmdLine;
    }
    public get cmdLine(): string | undefined {
        return this['cmd_line'];
    }
    public withErrorInfo(errorInfo: string): ServerAppStatusResponseInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: string  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): string | undefined {
        return this['error_info'];
    }
    public withStartTime(startTime: string): ServerAppStatusResponseInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withAppProtectStatus(appProtectStatus: number): ServerAppStatusResponseInfo {
        this['app_protect_status'] = appProtectStatus;
        return this;
    }
    public set appProtectStatus(appProtectStatus: number  | undefined) {
        this['app_protect_status'] = appProtectStatus;
    }
    public get appProtectStatus(): number | undefined {
        return this['app_protect_status'];
    }
    public withChkFeatureName(chkFeatureName: string): ServerAppStatusResponseInfo {
        this['chk_feature_name'] = chkFeatureName;
        return this;
    }
    public set chkFeatureName(chkFeatureName: string  | undefined) {
        this['chk_feature_name'] = chkFeatureName;
    }
    public get chkFeatureName(): string | undefined {
        return this['chk_feature_name'];
    }
}