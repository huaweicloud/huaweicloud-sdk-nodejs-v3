

export class AppWhitelistPolicyProcessResponseInfo {
    private 'process_name'?: string;
    private 'process_path'?: string;
    private 'process_hash'?: string;
    private 'handle_status'?: string;
    private 'specified_path'?: string;
    public cmdline?: string;
    private 'file_size'?: number;
    private 'file_signer'?: string;
    private 'process_type'?: number;
    private 'os_type'?: string;
    private 'app_type'?: string;
    private 'whitelist_count'?: number;
    private 'blacklist_count'?: number;
    private 'trust_status_source'?: number;
    private 'process_status'?: string;
    public constructor() { 
    }
    public withProcessName(processName: string): AppWhitelistPolicyProcessResponseInfo {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): AppWhitelistPolicyProcessResponseInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessHash(processHash: string): AppWhitelistPolicyProcessResponseInfo {
        this['process_hash'] = processHash;
        return this;
    }
    public set processHash(processHash: string  | undefined) {
        this['process_hash'] = processHash;
    }
    public get processHash(): string | undefined {
        return this['process_hash'];
    }
    public withHandleStatus(handleStatus: string): AppWhitelistPolicyProcessResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSpecifiedPath(specifiedPath: string): AppWhitelistPolicyProcessResponseInfo {
        this['specified_path'] = specifiedPath;
        return this;
    }
    public set specifiedPath(specifiedPath: string  | undefined) {
        this['specified_path'] = specifiedPath;
    }
    public get specifiedPath(): string | undefined {
        return this['specified_path'];
    }
    public withCmdline(cmdline: string): AppWhitelistPolicyProcessResponseInfo {
        this['cmdline'] = cmdline;
        return this;
    }
    public withFileSize(fileSize: number): AppWhitelistPolicyProcessResponseInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileSigner(fileSigner: string): AppWhitelistPolicyProcessResponseInfo {
        this['file_signer'] = fileSigner;
        return this;
    }
    public set fileSigner(fileSigner: string  | undefined) {
        this['file_signer'] = fileSigner;
    }
    public get fileSigner(): string | undefined {
        return this['file_signer'];
    }
    public withProcessType(processType: number): AppWhitelistPolicyProcessResponseInfo {
        this['process_type'] = processType;
        return this;
    }
    public set processType(processType: number  | undefined) {
        this['process_type'] = processType;
    }
    public get processType(): number | undefined {
        return this['process_type'];
    }
    public withOsType(osType: string): AppWhitelistPolicyProcessResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withAppType(appType: string): AppWhitelistPolicyProcessResponseInfo {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withWhitelistCount(whitelistCount: number): AppWhitelistPolicyProcessResponseInfo {
        this['whitelist_count'] = whitelistCount;
        return this;
    }
    public set whitelistCount(whitelistCount: number  | undefined) {
        this['whitelist_count'] = whitelistCount;
    }
    public get whitelistCount(): number | undefined {
        return this['whitelist_count'];
    }
    public withBlacklistCount(blacklistCount: number): AppWhitelistPolicyProcessResponseInfo {
        this['blacklist_count'] = blacklistCount;
        return this;
    }
    public set blacklistCount(blacklistCount: number  | undefined) {
        this['blacklist_count'] = blacklistCount;
    }
    public get blacklistCount(): number | undefined {
        return this['blacklist_count'];
    }
    public withTrustStatusSource(trustStatusSource: number): AppWhitelistPolicyProcessResponseInfo {
        this['trust_status_source'] = trustStatusSource;
        return this;
    }
    public set trustStatusSource(trustStatusSource: number  | undefined) {
        this['trust_status_source'] = trustStatusSource;
    }
    public get trustStatusSource(): number | undefined {
        return this['trust_status_source'];
    }
    public withProcessStatus(processStatus: string): AppWhitelistPolicyProcessResponseInfo {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
}