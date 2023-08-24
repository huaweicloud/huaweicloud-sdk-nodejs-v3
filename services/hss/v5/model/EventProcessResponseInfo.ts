

export class EventProcessResponseInfo {
    private 'process_name'?: string;
    private 'process_path'?: string;
    private 'process_pid'?: number;
    private 'process_uid'?: number;
    private 'process_username'?: string;
    private 'process_cmdline'?: string;
    private 'process_filename'?: string;
    private 'process_start_time'?: number;
    private 'process_gid'?: number;
    private 'process_egid'?: number;
    private 'process_euid'?: number;
    private 'parent_process_name'?: string;
    private 'parent_process_path'?: string;
    private 'parent_process_pid'?: number;
    private 'parent_process_uid'?: number;
    private 'parent_process_cmdline'?: string;
    private 'parent_process_filename'?: string;
    private 'parent_process_start_time'?: number;
    private 'parent_process_gid'?: number;
    private 'parent_process_egid'?: number;
    private 'parent_process_euid'?: number;
    private 'child_process_name'?: string;
    private 'child_process_path'?: string;
    private 'child_process_pid'?: number;
    private 'child_process_uid'?: number;
    private 'child_process_cmdline'?: string;
    private 'child_process_filename'?: string;
    private 'child_process_start_time'?: number;
    private 'child_process_gid'?: number;
    private 'child_process_egid'?: number;
    private 'child_process_euid'?: number;
    private 'virt_cmd'?: string;
    private 'virt_process_name'?: string;
    private 'escape_mode'?: string;
    private 'escape_cmd'?: string;
    private 'process_hash'?: string;
    public constructor() { 
    }
    public withProcessName(processName: string): EventProcessResponseInfo {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): EventProcessResponseInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessPid(processPid: number): EventProcessResponseInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withProcessUid(processUid: number): EventProcessResponseInfo {
        this['process_uid'] = processUid;
        return this;
    }
    public set processUid(processUid: number  | undefined) {
        this['process_uid'] = processUid;
    }
    public get processUid(): number | undefined {
        return this['process_uid'];
    }
    public withProcessUsername(processUsername: string): EventProcessResponseInfo {
        this['process_username'] = processUsername;
        return this;
    }
    public set processUsername(processUsername: string  | undefined) {
        this['process_username'] = processUsername;
    }
    public get processUsername(): string | undefined {
        return this['process_username'];
    }
    public withProcessCmdline(processCmdline: string): EventProcessResponseInfo {
        this['process_cmdline'] = processCmdline;
        return this;
    }
    public set processCmdline(processCmdline: string  | undefined) {
        this['process_cmdline'] = processCmdline;
    }
    public get processCmdline(): string | undefined {
        return this['process_cmdline'];
    }
    public withProcessFilename(processFilename: string): EventProcessResponseInfo {
        this['process_filename'] = processFilename;
        return this;
    }
    public set processFilename(processFilename: string  | undefined) {
        this['process_filename'] = processFilename;
    }
    public get processFilename(): string | undefined {
        return this['process_filename'];
    }
    public withProcessStartTime(processStartTime: number): EventProcessResponseInfo {
        this['process_start_time'] = processStartTime;
        return this;
    }
    public set processStartTime(processStartTime: number  | undefined) {
        this['process_start_time'] = processStartTime;
    }
    public get processStartTime(): number | undefined {
        return this['process_start_time'];
    }
    public withProcessGid(processGid: number): EventProcessResponseInfo {
        this['process_gid'] = processGid;
        return this;
    }
    public set processGid(processGid: number  | undefined) {
        this['process_gid'] = processGid;
    }
    public get processGid(): number | undefined {
        return this['process_gid'];
    }
    public withProcessEgid(processEgid: number): EventProcessResponseInfo {
        this['process_egid'] = processEgid;
        return this;
    }
    public set processEgid(processEgid: number  | undefined) {
        this['process_egid'] = processEgid;
    }
    public get processEgid(): number | undefined {
        return this['process_egid'];
    }
    public withProcessEuid(processEuid: number): EventProcessResponseInfo {
        this['process_euid'] = processEuid;
        return this;
    }
    public set processEuid(processEuid: number  | undefined) {
        this['process_euid'] = processEuid;
    }
    public get processEuid(): number | undefined {
        return this['process_euid'];
    }
    public withParentProcessName(parentProcessName: string): EventProcessResponseInfo {
        this['parent_process_name'] = parentProcessName;
        return this;
    }
    public set parentProcessName(parentProcessName: string  | undefined) {
        this['parent_process_name'] = parentProcessName;
    }
    public get parentProcessName(): string | undefined {
        return this['parent_process_name'];
    }
    public withParentProcessPath(parentProcessPath: string): EventProcessResponseInfo {
        this['parent_process_path'] = parentProcessPath;
        return this;
    }
    public set parentProcessPath(parentProcessPath: string  | undefined) {
        this['parent_process_path'] = parentProcessPath;
    }
    public get parentProcessPath(): string | undefined {
        return this['parent_process_path'];
    }
    public withParentProcessPid(parentProcessPid: number): EventProcessResponseInfo {
        this['parent_process_pid'] = parentProcessPid;
        return this;
    }
    public set parentProcessPid(parentProcessPid: number  | undefined) {
        this['parent_process_pid'] = parentProcessPid;
    }
    public get parentProcessPid(): number | undefined {
        return this['parent_process_pid'];
    }
    public withParentProcessUid(parentProcessUid: number): EventProcessResponseInfo {
        this['parent_process_uid'] = parentProcessUid;
        return this;
    }
    public set parentProcessUid(parentProcessUid: number  | undefined) {
        this['parent_process_uid'] = parentProcessUid;
    }
    public get parentProcessUid(): number | undefined {
        return this['parent_process_uid'];
    }
    public withParentProcessCmdline(parentProcessCmdline: string): EventProcessResponseInfo {
        this['parent_process_cmdline'] = parentProcessCmdline;
        return this;
    }
    public set parentProcessCmdline(parentProcessCmdline: string  | undefined) {
        this['parent_process_cmdline'] = parentProcessCmdline;
    }
    public get parentProcessCmdline(): string | undefined {
        return this['parent_process_cmdline'];
    }
    public withParentProcessFilename(parentProcessFilename: string): EventProcessResponseInfo {
        this['parent_process_filename'] = parentProcessFilename;
        return this;
    }
    public set parentProcessFilename(parentProcessFilename: string  | undefined) {
        this['parent_process_filename'] = parentProcessFilename;
    }
    public get parentProcessFilename(): string | undefined {
        return this['parent_process_filename'];
    }
    public withParentProcessStartTime(parentProcessStartTime: number): EventProcessResponseInfo {
        this['parent_process_start_time'] = parentProcessStartTime;
        return this;
    }
    public set parentProcessStartTime(parentProcessStartTime: number  | undefined) {
        this['parent_process_start_time'] = parentProcessStartTime;
    }
    public get parentProcessStartTime(): number | undefined {
        return this['parent_process_start_time'];
    }
    public withParentProcessGid(parentProcessGid: number): EventProcessResponseInfo {
        this['parent_process_gid'] = parentProcessGid;
        return this;
    }
    public set parentProcessGid(parentProcessGid: number  | undefined) {
        this['parent_process_gid'] = parentProcessGid;
    }
    public get parentProcessGid(): number | undefined {
        return this['parent_process_gid'];
    }
    public withParentProcessEgid(parentProcessEgid: number): EventProcessResponseInfo {
        this['parent_process_egid'] = parentProcessEgid;
        return this;
    }
    public set parentProcessEgid(parentProcessEgid: number  | undefined) {
        this['parent_process_egid'] = parentProcessEgid;
    }
    public get parentProcessEgid(): number | undefined {
        return this['parent_process_egid'];
    }
    public withParentProcessEuid(parentProcessEuid: number): EventProcessResponseInfo {
        this['parent_process_euid'] = parentProcessEuid;
        return this;
    }
    public set parentProcessEuid(parentProcessEuid: number  | undefined) {
        this['parent_process_euid'] = parentProcessEuid;
    }
    public get parentProcessEuid(): number | undefined {
        return this['parent_process_euid'];
    }
    public withChildProcessName(childProcessName: string): EventProcessResponseInfo {
        this['child_process_name'] = childProcessName;
        return this;
    }
    public set childProcessName(childProcessName: string  | undefined) {
        this['child_process_name'] = childProcessName;
    }
    public get childProcessName(): string | undefined {
        return this['child_process_name'];
    }
    public withChildProcessPath(childProcessPath: string): EventProcessResponseInfo {
        this['child_process_path'] = childProcessPath;
        return this;
    }
    public set childProcessPath(childProcessPath: string  | undefined) {
        this['child_process_path'] = childProcessPath;
    }
    public get childProcessPath(): string | undefined {
        return this['child_process_path'];
    }
    public withChildProcessPid(childProcessPid: number): EventProcessResponseInfo {
        this['child_process_pid'] = childProcessPid;
        return this;
    }
    public set childProcessPid(childProcessPid: number  | undefined) {
        this['child_process_pid'] = childProcessPid;
    }
    public get childProcessPid(): number | undefined {
        return this['child_process_pid'];
    }
    public withChildProcessUid(childProcessUid: number): EventProcessResponseInfo {
        this['child_process_uid'] = childProcessUid;
        return this;
    }
    public set childProcessUid(childProcessUid: number  | undefined) {
        this['child_process_uid'] = childProcessUid;
    }
    public get childProcessUid(): number | undefined {
        return this['child_process_uid'];
    }
    public withChildProcessCmdline(childProcessCmdline: string): EventProcessResponseInfo {
        this['child_process_cmdline'] = childProcessCmdline;
        return this;
    }
    public set childProcessCmdline(childProcessCmdline: string  | undefined) {
        this['child_process_cmdline'] = childProcessCmdline;
    }
    public get childProcessCmdline(): string | undefined {
        return this['child_process_cmdline'];
    }
    public withChildProcessFilename(childProcessFilename: string): EventProcessResponseInfo {
        this['child_process_filename'] = childProcessFilename;
        return this;
    }
    public set childProcessFilename(childProcessFilename: string  | undefined) {
        this['child_process_filename'] = childProcessFilename;
    }
    public get childProcessFilename(): string | undefined {
        return this['child_process_filename'];
    }
    public withChildProcessStartTime(childProcessStartTime: number): EventProcessResponseInfo {
        this['child_process_start_time'] = childProcessStartTime;
        return this;
    }
    public set childProcessStartTime(childProcessStartTime: number  | undefined) {
        this['child_process_start_time'] = childProcessStartTime;
    }
    public get childProcessStartTime(): number | undefined {
        return this['child_process_start_time'];
    }
    public withChildProcessGid(childProcessGid: number): EventProcessResponseInfo {
        this['child_process_gid'] = childProcessGid;
        return this;
    }
    public set childProcessGid(childProcessGid: number  | undefined) {
        this['child_process_gid'] = childProcessGid;
    }
    public get childProcessGid(): number | undefined {
        return this['child_process_gid'];
    }
    public withChildProcessEgid(childProcessEgid: number): EventProcessResponseInfo {
        this['child_process_egid'] = childProcessEgid;
        return this;
    }
    public set childProcessEgid(childProcessEgid: number  | undefined) {
        this['child_process_egid'] = childProcessEgid;
    }
    public get childProcessEgid(): number | undefined {
        return this['child_process_egid'];
    }
    public withChildProcessEuid(childProcessEuid: number): EventProcessResponseInfo {
        this['child_process_euid'] = childProcessEuid;
        return this;
    }
    public set childProcessEuid(childProcessEuid: number  | undefined) {
        this['child_process_euid'] = childProcessEuid;
    }
    public get childProcessEuid(): number | undefined {
        return this['child_process_euid'];
    }
    public withVirtCmd(virtCmd: string): EventProcessResponseInfo {
        this['virt_cmd'] = virtCmd;
        return this;
    }
    public set virtCmd(virtCmd: string  | undefined) {
        this['virt_cmd'] = virtCmd;
    }
    public get virtCmd(): string | undefined {
        return this['virt_cmd'];
    }
    public withVirtProcessName(virtProcessName: string): EventProcessResponseInfo {
        this['virt_process_name'] = virtProcessName;
        return this;
    }
    public set virtProcessName(virtProcessName: string  | undefined) {
        this['virt_process_name'] = virtProcessName;
    }
    public get virtProcessName(): string | undefined {
        return this['virt_process_name'];
    }
    public withEscapeMode(escapeMode: string): EventProcessResponseInfo {
        this['escape_mode'] = escapeMode;
        return this;
    }
    public set escapeMode(escapeMode: string  | undefined) {
        this['escape_mode'] = escapeMode;
    }
    public get escapeMode(): string | undefined {
        return this['escape_mode'];
    }
    public withEscapeCmd(escapeCmd: string): EventProcessResponseInfo {
        this['escape_cmd'] = escapeCmd;
        return this;
    }
    public set escapeCmd(escapeCmd: string  | undefined) {
        this['escape_cmd'] = escapeCmd;
    }
    public get escapeCmd(): string | undefined {
        return this['escape_cmd'];
    }
    public withProcessHash(processHash: string): EventProcessResponseInfo {
        this['process_hash'] = processHash;
        return this;
    }
    public set processHash(processHash: string  | undefined) {
        this['process_hash'] = processHash;
    }
    public get processHash(): string | undefined {
        return this['process_hash'];
    }
}