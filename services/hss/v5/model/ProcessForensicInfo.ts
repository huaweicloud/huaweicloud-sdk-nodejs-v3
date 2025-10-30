

export class ProcessForensicInfo {
    private 'process_name'?: string;
    private 'process_path'?: string;
    private 'process_pid'?: number;
    private 'process_uid'?: number;
    private 'process_gid'?: number;
    private 'process_egid'?: number;
    private 'process_euid'?: number;
    private 'process_username'?: string;
    private 'process_cmdline'?: string;
    private 'process_start_time'?: number;
    private 'process_file_hash'?: string;
    private 'ancestor_process_pid'?: number;
    private 'ancestor_process_cmdline'?: string;
    private 'ancestor_process_path'?: string;
    private 'session_id'?: number;
    private 'event_num'?: number;
    public type?: string;
    public constructor() { 
    }
    public withProcessName(processName: string): ProcessForensicInfo {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): ProcessForensicInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessPid(processPid: number): ProcessForensicInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withProcessUid(processUid: number): ProcessForensicInfo {
        this['process_uid'] = processUid;
        return this;
    }
    public set processUid(processUid: number  | undefined) {
        this['process_uid'] = processUid;
    }
    public get processUid(): number | undefined {
        return this['process_uid'];
    }
    public withProcessGid(processGid: number): ProcessForensicInfo {
        this['process_gid'] = processGid;
        return this;
    }
    public set processGid(processGid: number  | undefined) {
        this['process_gid'] = processGid;
    }
    public get processGid(): number | undefined {
        return this['process_gid'];
    }
    public withProcessEgid(processEgid: number): ProcessForensicInfo {
        this['process_egid'] = processEgid;
        return this;
    }
    public set processEgid(processEgid: number  | undefined) {
        this['process_egid'] = processEgid;
    }
    public get processEgid(): number | undefined {
        return this['process_egid'];
    }
    public withProcessEuid(processEuid: number): ProcessForensicInfo {
        this['process_euid'] = processEuid;
        return this;
    }
    public set processEuid(processEuid: number  | undefined) {
        this['process_euid'] = processEuid;
    }
    public get processEuid(): number | undefined {
        return this['process_euid'];
    }
    public withProcessUsername(processUsername: string): ProcessForensicInfo {
        this['process_username'] = processUsername;
        return this;
    }
    public set processUsername(processUsername: string  | undefined) {
        this['process_username'] = processUsername;
    }
    public get processUsername(): string | undefined {
        return this['process_username'];
    }
    public withProcessCmdline(processCmdline: string): ProcessForensicInfo {
        this['process_cmdline'] = processCmdline;
        return this;
    }
    public set processCmdline(processCmdline: string  | undefined) {
        this['process_cmdline'] = processCmdline;
    }
    public get processCmdline(): string | undefined {
        return this['process_cmdline'];
    }
    public withProcessStartTime(processStartTime: number): ProcessForensicInfo {
        this['process_start_time'] = processStartTime;
        return this;
    }
    public set processStartTime(processStartTime: number  | undefined) {
        this['process_start_time'] = processStartTime;
    }
    public get processStartTime(): number | undefined {
        return this['process_start_time'];
    }
    public withProcessFileHash(processFileHash: string): ProcessForensicInfo {
        this['process_file_hash'] = processFileHash;
        return this;
    }
    public set processFileHash(processFileHash: string  | undefined) {
        this['process_file_hash'] = processFileHash;
    }
    public get processFileHash(): string | undefined {
        return this['process_file_hash'];
    }
    public withAncestorProcessPid(ancestorProcessPid: number): ProcessForensicInfo {
        this['ancestor_process_pid'] = ancestorProcessPid;
        return this;
    }
    public set ancestorProcessPid(ancestorProcessPid: number  | undefined) {
        this['ancestor_process_pid'] = ancestorProcessPid;
    }
    public get ancestorProcessPid(): number | undefined {
        return this['ancestor_process_pid'];
    }
    public withAncestorProcessCmdline(ancestorProcessCmdline: string): ProcessForensicInfo {
        this['ancestor_process_cmdline'] = ancestorProcessCmdline;
        return this;
    }
    public set ancestorProcessCmdline(ancestorProcessCmdline: string  | undefined) {
        this['ancestor_process_cmdline'] = ancestorProcessCmdline;
    }
    public get ancestorProcessCmdline(): string | undefined {
        return this['ancestor_process_cmdline'];
    }
    public withAncestorProcessPath(ancestorProcessPath: string): ProcessForensicInfo {
        this['ancestor_process_path'] = ancestorProcessPath;
        return this;
    }
    public set ancestorProcessPath(ancestorProcessPath: string  | undefined) {
        this['ancestor_process_path'] = ancestorProcessPath;
    }
    public get ancestorProcessPath(): string | undefined {
        return this['ancestor_process_path'];
    }
    public withSessionId(sessionId: number): ProcessForensicInfo {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: number  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): number | undefined {
        return this['session_id'];
    }
    public withEventNum(eventNum: number): ProcessForensicInfo {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
    public withType(type: string): ProcessForensicInfo {
        this['type'] = type;
        return this;
    }
}