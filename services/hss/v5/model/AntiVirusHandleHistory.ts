

export class AntiVirusHandleHistory {
    private 'result_id'?: string;
    private 'malware_type'?: string;
    private 'malware_name'?: string;
    public severity?: string;
    private 'file_path'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'asset_value'?: string;
    private 'occur_time'?: number;
    private 'handle_status'?: string;
    private 'handle_method'?: string;
    public notes?: string;
    private 'handle_time'?: number;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withResultId(resultId: string): AntiVirusHandleHistory {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withMalwareType(malwareType: string): AntiVirusHandleHistory {
        this['malware_type'] = malwareType;
        return this;
    }
    public set malwareType(malwareType: string  | undefined) {
        this['malware_type'] = malwareType;
    }
    public get malwareType(): string | undefined {
        return this['malware_type'];
    }
    public withMalwareName(malwareName: string): AntiVirusHandleHistory {
        this['malware_name'] = malwareName;
        return this;
    }
    public set malwareName(malwareName: string  | undefined) {
        this['malware_name'] = malwareName;
    }
    public get malwareName(): string | undefined {
        return this['malware_name'];
    }
    public withSeverity(severity: string): AntiVirusHandleHistory {
        this['severity'] = severity;
        return this;
    }
    public withFilePath(filePath: string): AntiVirusHandleHistory {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withHostName(hostName: string): AntiVirusHandleHistory {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): AntiVirusHandleHistory {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): AntiVirusHandleHistory {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAssetValue(assetValue: string): AntiVirusHandleHistory {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withOccurTime(occurTime: number): AntiVirusHandleHistory {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withHandleStatus(handleStatus: string): AntiVirusHandleHistory {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHandleMethod(handleMethod: string): AntiVirusHandleHistory {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withNotes(notes: string): AntiVirusHandleHistory {
        this['notes'] = notes;
        return this;
    }
    public withHandleTime(handleTime: number): AntiVirusHandleHistory {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withUserName(userName: string): AntiVirusHandleHistory {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}