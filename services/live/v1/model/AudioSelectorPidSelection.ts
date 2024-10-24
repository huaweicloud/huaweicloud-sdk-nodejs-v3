

export class AudioSelectorPidSelection {
    public pid?: number;
    public constructor(pid?: number) { 
        this['pid'] = pid;
    }
    public withPid(pid: number): AudioSelectorPidSelection {
        this['pid'] = pid;
        return this;
    }
}