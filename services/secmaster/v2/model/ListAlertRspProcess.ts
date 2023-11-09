

export class ListAlertRspProcess {
    private 'process_name'?: string;
    private 'process_path'?: string;
    private 'process_pid'?: number;
    private 'process_uid'?: number;
    private 'process_cmdline'?: string;
    public constructor() { 
    }
    public withProcessName(processName: string): ListAlertRspProcess {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessPath(processPath: string): ListAlertRspProcess {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessPid(processPid: number): ListAlertRspProcess {
        this['process_pid'] = processPid;
        return this;
    }
    public set processPid(processPid: number  | undefined) {
        this['process_pid'] = processPid;
    }
    public get processPid(): number | undefined {
        return this['process_pid'];
    }
    public withProcessUid(processUid: number): ListAlertRspProcess {
        this['process_uid'] = processUid;
        return this;
    }
    public set processUid(processUid: number  | undefined) {
        this['process_uid'] = processUid;
    }
    public get processUid(): number | undefined {
        return this['process_uid'];
    }
    public withProcessCmdline(processCmdline: string): ListAlertRspProcess {
        this['process_cmdline'] = processCmdline;
        return this;
    }
    public set processCmdline(processCmdline: string  | undefined) {
        this['process_cmdline'] = processCmdline;
    }
    public get processCmdline(): string | undefined {
        return this['process_cmdline'];
    }
}