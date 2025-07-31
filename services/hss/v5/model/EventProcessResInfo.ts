

export class EventProcessResInfo {
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
    public mode?: string;
    public rule?: number;
    public score?: number;
    private 'process_file_hash'?: string;
    private 'parent_process_file_hash'?: string;
    private 'ancestor_process_pid'?: number;
    private 'ancestor_process_cmdline'?: string;
    private 'ancestor_process_path'?: string;
    private 'operate_type'?: number;
    private 'session_id'?: number;
    public constructor() { 
    }
    public withProcessName(processName: string): EventProcessResInfo {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): EventProcessResInfo {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessPid(processPid: number): EventProcessResInfo {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withProcessUid(processUid: number): EventProcessResInfo {
        this['process_uid'] = processUid;
        return this;
    }
    public set processUid(processUid: number  | undefined) {
        this['process_uid'] = processUid;
    }
    public get processUid(): number | undefined {
        return this['process_uid'];
    }
    public withProcessUsername(processUsername: string): EventProcessResInfo {
        this['process_username'] = processUsername;
        return this;
    }
    public set processUsername(processUsername: string  | undefined) {
        this['process_username'] = processUsername;
    }
    public get processUsername(): string | undefined {
        return this['process_username'];
    }
    public withProcessCmdline(processCmdline: string): EventProcessResInfo {
        this['process_cmdline'] = processCmdline;
        return this;
    }
    public set processCmdline(processCmdline: string  | undefined) {
        this['process_cmdline'] = processCmdline;
    }
    public get processCmdline(): string | undefined {
        return this['process_cmdline'];
    }
    public withProcessFilename(processFilename: string): EventProcessResInfo {
        this['process_filename'] = processFilename;
        return this;
    }
    public set processFilename(processFilename: string  | undefined) {
        this['process_filename'] = processFilename;
    }
    public get processFilename(): string | undefined {
        return this['process_filename'];
    }
    public withProcessStartTime(processStartTime: number): EventProcessResInfo {
        this['process_start_time'] = processStartTime;
        return this;
    }
    public set processStartTime(processStartTime: number  | undefined) {
        this['process_start_time'] = processStartTime;
    }
    public get processStartTime(): number | undefined {
        return this['process_start_time'];
    }
    public withProcessGid(processGid: number): EventProcessResInfo {
        this['process_gid'] = processGid;
        return this;
    }
    public set processGid(processGid: number  | undefined) {
        this['process_gid'] = processGid;
    }
    public get processGid(): number | undefined {
        return this['process_gid'];
    }
    public withProcessEgid(processEgid: number): EventProcessResInfo {
        this['process_egid'] = processEgid;
        return this;
    }
    public set processEgid(processEgid: number  | undefined) {
        this['process_egid'] = processEgid;
    }
    public get processEgid(): number | undefined {
        return this['process_egid'];
    }
    public withProcessEuid(processEuid: number): EventProcessResInfo {
        this['process_euid'] = processEuid;
        return this;
    }
    public set processEuid(processEuid: number  | undefined) {
        this['process_euid'] = processEuid;
    }
    public get processEuid(): number | undefined {
        return this['process_euid'];
    }
    public withParentProcessName(parentProcessName: string): EventProcessResInfo {
        this['parent_process_name'] = parentProcessName;
        return this;
    }
    public set parentProcessName(parentProcessName: string  | undefined) {
        this['parent_process_name'] = parentProcessName;
    }
    public get parentProcessName(): string | undefined {
        return this['parent_process_name'];
    }
    public withParentProcessPath(parentProcessPath: string): EventProcessResInfo {
        this['parent_process_path'] = parentProcessPath;
        return this;
    }
    public set parentProcessPath(parentProcessPath: string  | undefined) {
        this['parent_process_path'] = parentProcessPath;
    }
    public get parentProcessPath(): string | undefined {
        return this['parent_process_path'];
    }
    public withParentProcessPid(parentProcessPid: number): EventProcessResInfo {
        this['parent_process_pid'] = parentProcessPid;
        return this;
    }
    public set parentProcessPid(parentProcessPid: number  | undefined) {
        this['parent_process_pid'] = parentProcessPid;
    }
    public get parentProcessPid(): number | undefined {
        return this['parent_process_pid'];
    }
    public withParentProcessUid(parentProcessUid: number): EventProcessResInfo {
        this['parent_process_uid'] = parentProcessUid;
        return this;
    }
    public set parentProcessUid(parentProcessUid: number  | undefined) {
        this['parent_process_uid'] = parentProcessUid;
    }
    public get parentProcessUid(): number | undefined {
        return this['parent_process_uid'];
    }
    public withParentProcessCmdline(parentProcessCmdline: string): EventProcessResInfo {
        this['parent_process_cmdline'] = parentProcessCmdline;
        return this;
    }
    public set parentProcessCmdline(parentProcessCmdline: string  | undefined) {
        this['parent_process_cmdline'] = parentProcessCmdline;
    }
    public get parentProcessCmdline(): string | undefined {
        return this['parent_process_cmdline'];
    }
    public withParentProcessFilename(parentProcessFilename: string): EventProcessResInfo {
        this['parent_process_filename'] = parentProcessFilename;
        return this;
    }
    public set parentProcessFilename(parentProcessFilename: string  | undefined) {
        this['parent_process_filename'] = parentProcessFilename;
    }
    public get parentProcessFilename(): string | undefined {
        return this['parent_process_filename'];
    }
    public withParentProcessStartTime(parentProcessStartTime: number): EventProcessResInfo {
        this['parent_process_start_time'] = parentProcessStartTime;
        return this;
    }
    public set parentProcessStartTime(parentProcessStartTime: number  | undefined) {
        this['parent_process_start_time'] = parentProcessStartTime;
    }
    public get parentProcessStartTime(): number | undefined {
        return this['parent_process_start_time'];
    }
    public withParentProcessGid(parentProcessGid: number): EventProcessResInfo {
        this['parent_process_gid'] = parentProcessGid;
        return this;
    }
    public set parentProcessGid(parentProcessGid: number  | undefined) {
        this['parent_process_gid'] = parentProcessGid;
    }
    public get parentProcessGid(): number | undefined {
        return this['parent_process_gid'];
    }
    public withParentProcessEgid(parentProcessEgid: number): EventProcessResInfo {
        this['parent_process_egid'] = parentProcessEgid;
        return this;
    }
    public set parentProcessEgid(parentProcessEgid: number  | undefined) {
        this['parent_process_egid'] = parentProcessEgid;
    }
    public get parentProcessEgid(): number | undefined {
        return this['parent_process_egid'];
    }
    public withParentProcessEuid(parentProcessEuid: number): EventProcessResInfo {
        this['parent_process_euid'] = parentProcessEuid;
        return this;
    }
    public set parentProcessEuid(parentProcessEuid: number  | undefined) {
        this['parent_process_euid'] = parentProcessEuid;
    }
    public get parentProcessEuid(): number | undefined {
        return this['parent_process_euid'];
    }
    public withChildProcessName(childProcessName: string): EventProcessResInfo {
        this['child_process_name'] = childProcessName;
        return this;
    }
    public set childProcessName(childProcessName: string  | undefined) {
        this['child_process_name'] = childProcessName;
    }
    public get childProcessName(): string | undefined {
        return this['child_process_name'];
    }
    public withChildProcessPath(childProcessPath: string): EventProcessResInfo {
        this['child_process_path'] = childProcessPath;
        return this;
    }
    public set childProcessPath(childProcessPath: string  | undefined) {
        this['child_process_path'] = childProcessPath;
    }
    public get childProcessPath(): string | undefined {
        return this['child_process_path'];
    }
    public withChildProcessPid(childProcessPid: number): EventProcessResInfo {
        this['child_process_pid'] = childProcessPid;
        return this;
    }
    public set childProcessPid(childProcessPid: number  | undefined) {
        this['child_process_pid'] = childProcessPid;
    }
    public get childProcessPid(): number | undefined {
        return this['child_process_pid'];
    }
    public withChildProcessUid(childProcessUid: number): EventProcessResInfo {
        this['child_process_uid'] = childProcessUid;
        return this;
    }
    public set childProcessUid(childProcessUid: number  | undefined) {
        this['child_process_uid'] = childProcessUid;
    }
    public get childProcessUid(): number | undefined {
        return this['child_process_uid'];
    }
    public withChildProcessCmdline(childProcessCmdline: string): EventProcessResInfo {
        this['child_process_cmdline'] = childProcessCmdline;
        return this;
    }
    public set childProcessCmdline(childProcessCmdline: string  | undefined) {
        this['child_process_cmdline'] = childProcessCmdline;
    }
    public get childProcessCmdline(): string | undefined {
        return this['child_process_cmdline'];
    }
    public withChildProcessFilename(childProcessFilename: string): EventProcessResInfo {
        this['child_process_filename'] = childProcessFilename;
        return this;
    }
    public set childProcessFilename(childProcessFilename: string  | undefined) {
        this['child_process_filename'] = childProcessFilename;
    }
    public get childProcessFilename(): string | undefined {
        return this['child_process_filename'];
    }
    public withChildProcessStartTime(childProcessStartTime: number): EventProcessResInfo {
        this['child_process_start_time'] = childProcessStartTime;
        return this;
    }
    public set childProcessStartTime(childProcessStartTime: number  | undefined) {
        this['child_process_start_time'] = childProcessStartTime;
    }
    public get childProcessStartTime(): number | undefined {
        return this['child_process_start_time'];
    }
    public withChildProcessGid(childProcessGid: number): EventProcessResInfo {
        this['child_process_gid'] = childProcessGid;
        return this;
    }
    public set childProcessGid(childProcessGid: number  | undefined) {
        this['child_process_gid'] = childProcessGid;
    }
    public get childProcessGid(): number | undefined {
        return this['child_process_gid'];
    }
    public withChildProcessEgid(childProcessEgid: number): EventProcessResInfo {
        this['child_process_egid'] = childProcessEgid;
        return this;
    }
    public set childProcessEgid(childProcessEgid: number  | undefined) {
        this['child_process_egid'] = childProcessEgid;
    }
    public get childProcessEgid(): number | undefined {
        return this['child_process_egid'];
    }
    public withChildProcessEuid(childProcessEuid: number): EventProcessResInfo {
        this['child_process_euid'] = childProcessEuid;
        return this;
    }
    public set childProcessEuid(childProcessEuid: number  | undefined) {
        this['child_process_euid'] = childProcessEuid;
    }
    public get childProcessEuid(): number | undefined {
        return this['child_process_euid'];
    }
    public withVirtCmd(virtCmd: string): EventProcessResInfo {
        this['virt_cmd'] = virtCmd;
        return this;
    }
    public set virtCmd(virtCmd: string  | undefined) {
        this['virt_cmd'] = virtCmd;
    }
    public get virtCmd(): string | undefined {
        return this['virt_cmd'];
    }
    public withVirtProcessName(virtProcessName: string): EventProcessResInfo {
        this['virt_process_name'] = virtProcessName;
        return this;
    }
    public set virtProcessName(virtProcessName: string  | undefined) {
        this['virt_process_name'] = virtProcessName;
    }
    public get virtProcessName(): string | undefined {
        return this['virt_process_name'];
    }
    public withEscapeMode(escapeMode: string): EventProcessResInfo {
        this['escape_mode'] = escapeMode;
        return this;
    }
    public set escapeMode(escapeMode: string  | undefined) {
        this['escape_mode'] = escapeMode;
    }
    public get escapeMode(): string | undefined {
        return this['escape_mode'];
    }
    public withEscapeCmd(escapeCmd: string): EventProcessResInfo {
        this['escape_cmd'] = escapeCmd;
        return this;
    }
    public set escapeCmd(escapeCmd: string  | undefined) {
        this['escape_cmd'] = escapeCmd;
    }
    public get escapeCmd(): string | undefined {
        return this['escape_cmd'];
    }
    public withProcessHash(processHash: string): EventProcessResInfo {
        this['process_hash'] = processHash;
        return this;
    }
    public set processHash(processHash: string  | undefined) {
        this['process_hash'] = processHash;
    }
    public get processHash(): string | undefined {
        return this['process_hash'];
    }
    public withMode(mode: string): EventProcessResInfo {
        this['mode'] = mode;
        return this;
    }
    public withRule(rule: number): EventProcessResInfo {
        this['rule'] = rule;
        return this;
    }
    public withScore(score: number): EventProcessResInfo {
        this['score'] = score;
        return this;
    }
    public withProcessFileHash(processFileHash: string): EventProcessResInfo {
        this['process_file_hash'] = processFileHash;
        return this;
    }
    public set processFileHash(processFileHash: string  | undefined) {
        this['process_file_hash'] = processFileHash;
    }
    public get processFileHash(): string | undefined {
        return this['process_file_hash'];
    }
    public withParentProcessFileHash(parentProcessFileHash: string): EventProcessResInfo {
        this['parent_process_file_hash'] = parentProcessFileHash;
        return this;
    }
    public set parentProcessFileHash(parentProcessFileHash: string  | undefined) {
        this['parent_process_file_hash'] = parentProcessFileHash;
    }
    public get parentProcessFileHash(): string | undefined {
        return this['parent_process_file_hash'];
    }
    public withAncestorProcessPid(ancestorProcessPid: number): EventProcessResInfo {
        this['ancestor_process_pid'] = ancestorProcessPid;
        return this;
    }
    public set ancestorProcessPid(ancestorProcessPid: number  | undefined) {
        this['ancestor_process_pid'] = ancestorProcessPid;
    }
    public get ancestorProcessPid(): number | undefined {
        return this['ancestor_process_pid'];
    }
    public withAncestorProcessCmdline(ancestorProcessCmdline: string): EventProcessResInfo {
        this['ancestor_process_cmdline'] = ancestorProcessCmdline;
        return this;
    }
    public set ancestorProcessCmdline(ancestorProcessCmdline: string  | undefined) {
        this['ancestor_process_cmdline'] = ancestorProcessCmdline;
    }
    public get ancestorProcessCmdline(): string | undefined {
        return this['ancestor_process_cmdline'];
    }
    public withAncestorProcessPath(ancestorProcessPath: string): EventProcessResInfo {
        this['ancestor_process_path'] = ancestorProcessPath;
        return this;
    }
    public set ancestorProcessPath(ancestorProcessPath: string  | undefined) {
        this['ancestor_process_path'] = ancestorProcessPath;
    }
    public get ancestorProcessPath(): string | undefined {
        return this['ancestor_process_path'];
    }
    public withOperateType(operateType: number): EventProcessResInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: number  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): number | undefined {
        return this['operate_type'];
    }
    public withSessionId(sessionId: number): EventProcessResInfo {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: number  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): number | undefined {
        return this['session_id'];
    }
}