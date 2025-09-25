

export class HostProtectHistoryResponseInfo {
    private 'host_name'?: string;
    private 'occr_time'?: number;
    private 'occur_time'?: number;
    private 'file_path'?: string;
    private 'file_operation'?: string;
    private 'host_ip'?: string;
    private 'process_id'?: number;
    private 'process_name'?: string;
    private 'process_cmd'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): HostProtectHistoryResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withOccrTime(occrTime: number): HostProtectHistoryResponseInfo {
        this['occr_time'] = occrTime;
        return this;
    }
    public set occrTime(occrTime: number  | undefined) {
        this['occr_time'] = occrTime;
    }
    public get occrTime(): number | undefined {
        return this['occr_time'];
    }
    public withOccurTime(occurTime: number): HostProtectHistoryResponseInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withFilePath(filePath: string): HostProtectHistoryResponseInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileOperation(fileOperation: string): HostProtectHistoryResponseInfo {
        this['file_operation'] = fileOperation;
        return this;
    }
    public set fileOperation(fileOperation: string  | undefined) {
        this['file_operation'] = fileOperation;
    }
    public get fileOperation(): string | undefined {
        return this['file_operation'];
    }
    public withHostIp(hostIp: string): HostProtectHistoryResponseInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withProcessId(processId: number): HostProtectHistoryResponseInfo {
        this['process_id'] = processId;
        return this;
    }
    public set processId(processId: number  | undefined) {
        this['process_id'] = processId;
    }
    public get processId(): number | undefined {
        return this['process_id'];
    }
    public withProcessName(processName: string): HostProtectHistoryResponseInfo {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessCmd(processCmd: string): HostProtectHistoryResponseInfo {
        this['process_cmd'] = processCmd;
        return this;
    }
    public set processCmd(processCmd: string  | undefined) {
        this['process_cmd'] = processCmd;
    }
    public get processCmd(): string | undefined {
        return this['process_cmd'];
    }
}