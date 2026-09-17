

export class KillProcessHistoryInfo {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'task_id'?: number;
    private 'session_id'?: number;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public time?: number;
    public state?: string;
    public info?: string;
    private 'kill_time'?: number;
    private 'killed_source'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): KillProcessHistoryInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): KillProcessHistoryInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTaskId(taskId: number): KillProcessHistoryInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withSessionId(sessionId: number): KillProcessHistoryInfo {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: number  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): number | undefined {
        return this['session_id'];
    }
    public withUser(user: string): KillProcessHistoryInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): KillProcessHistoryInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): KillProcessHistoryInfo {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): KillProcessHistoryInfo {
        this['command'] = command;
        return this;
    }
    public withTime(time: number): KillProcessHistoryInfo {
        this['time'] = time;
        return this;
    }
    public withState(state: string): KillProcessHistoryInfo {
        this['state'] = state;
        return this;
    }
    public withInfo(info: string): KillProcessHistoryInfo {
        this['info'] = info;
        return this;
    }
    public withKillTime(killTime: number): KillProcessHistoryInfo {
        this['kill_time'] = killTime;
        return this;
    }
    public set killTime(killTime: number  | undefined) {
        this['kill_time'] = killTime;
    }
    public get killTime(): number | undefined {
        return this['kill_time'];
    }
    public withKilledSource(killedSource: string): KillProcessHistoryInfo {
        this['killed_source'] = killedSource;
        return this;
    }
    public set killedSource(killedSource: string  | undefined) {
        this['killed_source'] = killedSource;
    }
    public get killedSource(): string | undefined {
        return this['killed_source'];
    }
}