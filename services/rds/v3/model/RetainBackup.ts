

export class RetainBackup {
    public name?: string;
    public id?: string;
    public type?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public size?: string;
    public describe?: string;
    private 'backup_method'?: string;
    public tde?: boolean;
    public constructor() { 
    }
    public withName(name: string): RetainBackup {
        this['name'] = name;
        return this;
    }
    public withId(id: string): RetainBackup {
        this['id'] = id;
        return this;
    }
    public withType(type: string): RetainBackup {
        this['type'] = type;
        return this;
    }
    public withBeginTime(beginTime: string): RetainBackup {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): RetainBackup {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSize(size: string): RetainBackup {
        this['size'] = size;
        return this;
    }
    public withDescribe(describe: string): RetainBackup {
        this['describe'] = describe;
        return this;
    }
    public withBackupMethod(backupMethod: string): RetainBackup {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string  | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod(): string | undefined {
        return this['backup_method'];
    }
    public withTde(tde: boolean): RetainBackup {
        this['tde'] = tde;
        return this;
    }
}