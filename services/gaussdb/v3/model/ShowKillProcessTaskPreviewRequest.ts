

export class ShowKillProcessTaskPreviewRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public time?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public info?: string;
    public constructor(instanceId?: string, time?: string) { 
        this['instance_id'] = instanceId;
        this['time'] = time;
    }
    public withXLanguage(xLanguage: string): ShowKillProcessTaskPreviewRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowKillProcessTaskPreviewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTime(time: string): ShowKillProcessTaskPreviewRequest {
        this['time'] = time;
        return this;
    }
    public withUser(user: string): ShowKillProcessTaskPreviewRequest {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ShowKillProcessTaskPreviewRequest {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): ShowKillProcessTaskPreviewRequest {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): ShowKillProcessTaskPreviewRequest {
        this['command'] = command;
        return this;
    }
    public withInfo(info: string): ShowKillProcessTaskPreviewRequest {
        this['info'] = info;
        return this;
    }
}