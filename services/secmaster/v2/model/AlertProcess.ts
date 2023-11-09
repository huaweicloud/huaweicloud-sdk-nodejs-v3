

export class AlertProcess {
    private 'process_name'?: string;
    private 'process_path'?: string;
    private 'process_pid'?: number;
    private 'process_uid'?: number;
    private 'process_cmdline'?: string;
    private 'process_parent_name'?: string;
    private 'process_parent_path'?: string;
    private 'process_parent_pid'?: number;
    private 'process_parent_uid'?: number;
    private 'process_parent_cmdline'?: string;
    private 'process_child_name'?: string;
    private 'process_child_path'?: string;
    private 'process_child_pid'?: number;
    private 'process_child_uid'?: number;
    private 'process_child_cmdline'?: string;
    private 'process_launche_time'?: string;
    private 'process_terminate_time'?: string;
    public constructor() { 
    }
    public withProcessName(processName: string): AlertProcess {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): AlertProcess {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessPid(processPid: number): AlertProcess {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withProcessUid(processUid: number): AlertProcess {
        this['process_uid'] = processUid;
        return this;
    }
    public set processUid(processUid: number  | undefined) {
        this['process_uid'] = processUid;
    }
    public get processUid(): number | undefined {
        return this['process_uid'];
    }
    public withProcessCmdline(processCmdline: string): AlertProcess {
        this['process_cmdline'] = processCmdline;
        return this;
    }
    public set processCmdline(processCmdline: string  | undefined) {
        this['process_cmdline'] = processCmdline;
    }
    public get processCmdline(): string | undefined {
        return this['process_cmdline'];
    }
    public withProcessParentName(processParentName: string): AlertProcess {
        this['process_parent_name'] = processParentName;
        return this;
    }
    public set processParentName(processParentName: string  | undefined) {
        this['process_parent_name'] = processParentName;
    }
    public get processParentName(): string | undefined {
        return this['process_parent_name'];
    }
    public withProcessParentPath(processParentPath: string): AlertProcess {
        this['process_parent_path'] = processParentPath;
        return this;
    }
    public set processParentPath(processParentPath: string  | undefined) {
        this['process_parent_path'] = processParentPath;
    }
    public get processParentPath(): string | undefined {
        return this['process_parent_path'];
    }
    public withProcessParentPid(processParentPid: number): AlertProcess {
        this['process_parent_pid'] = processParentPid;
        return this;
    }
    public set processParentPid(processParentPid: number  | undefined) {
        this['process_parent_pid'] = processParentPid;
    }
    public get processParentPid(): number | undefined {
        return this['process_parent_pid'];
    }
    public withProcessParentUid(processParentUid: number): AlertProcess {
        this['process_parent_uid'] = processParentUid;
        return this;
    }
    public set processParentUid(processParentUid: number  | undefined) {
        this['process_parent_uid'] = processParentUid;
    }
    public get processParentUid(): number | undefined {
        return this['process_parent_uid'];
    }
    public withProcessParentCmdline(processParentCmdline: string): AlertProcess {
        this['process_parent_cmdline'] = processParentCmdline;
        return this;
    }
    public set processParentCmdline(processParentCmdline: string  | undefined) {
        this['process_parent_cmdline'] = processParentCmdline;
    }
    public get processParentCmdline(): string | undefined {
        return this['process_parent_cmdline'];
    }
    public withProcessChildName(processChildName: string): AlertProcess {
        this['process_child_name'] = processChildName;
        return this;
    }
    public set processChildName(processChildName: string  | undefined) {
        this['process_child_name'] = processChildName;
    }
    public get processChildName(): string | undefined {
        return this['process_child_name'];
    }
    public withProcessChildPath(processChildPath: string): AlertProcess {
        this['process_child_path'] = processChildPath;
        return this;
    }
    public set processChildPath(processChildPath: string  | undefined) {
        this['process_child_path'] = processChildPath;
    }
    public get processChildPath(): string | undefined {
        return this['process_child_path'];
    }
    public withProcessChildPid(processChildPid: number): AlertProcess {
        this['process_child_pid'] = processChildPid;
        return this;
    }
    public set processChildPid(processChildPid: number  | undefined) {
        this['process_child_pid'] = processChildPid;
    }
    public get processChildPid(): number | undefined {
        return this['process_child_pid'];
    }
    public withProcessChildUid(processChildUid: number): AlertProcess {
        this['process_child_uid'] = processChildUid;
        return this;
    }
    public set processChildUid(processChildUid: number  | undefined) {
        this['process_child_uid'] = processChildUid;
    }
    public get processChildUid(): number | undefined {
        return this['process_child_uid'];
    }
    public withProcessChildCmdline(processChildCmdline: string): AlertProcess {
        this['process_child_cmdline'] = processChildCmdline;
        return this;
    }
    public set processChildCmdline(processChildCmdline: string  | undefined) {
        this['process_child_cmdline'] = processChildCmdline;
    }
    public get processChildCmdline(): string | undefined {
        return this['process_child_cmdline'];
    }
    public withProcessLauncheTime(processLauncheTime: string): AlertProcess {
        this['process_launche_time'] = processLauncheTime;
        return this;
    }
    public set processLauncheTime(processLauncheTime: string  | undefined) {
        this['process_launche_time'] = processLauncheTime;
    }
    public get processLauncheTime(): string | undefined {
        return this['process_launche_time'];
    }
    public withProcessTerminateTime(processTerminateTime: string): AlertProcess {
        this['process_terminate_time'] = processTerminateTime;
        return this;
    }
    public set processTerminateTime(processTerminateTime: string  | undefined) {
        this['process_terminate_time'] = processTerminateTime;
    }
    public get processTerminateTime(): string | undefined {
        return this['process_terminate_time'];
    }
}