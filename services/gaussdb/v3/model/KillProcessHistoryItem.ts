

export class KillProcessHistoryItem {
    private 'task_id'?: string;
    private 'session_id'?: string;
    private 'kill_time'?: string;
    public mode?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public time?: string;
    public info?: string;
    public state?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): KillProcessHistoryItem {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSessionId(sessionId: string): KillProcessHistoryItem {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withKillTime(killTime: string): KillProcessHistoryItem {
        this['kill_time'] = killTime;
        return this;
    }
    public set killTime(killTime: string  | undefined) {
        this['kill_time'] = killTime;
    }
    public get killTime(): string | undefined {
        return this['kill_time'];
    }
    public withMode(mode: string): KillProcessHistoryItem {
        this['mode'] = mode;
        return this;
    }
    public withUser(user: string): KillProcessHistoryItem {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): KillProcessHistoryItem {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): KillProcessHistoryItem {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): KillProcessHistoryItem {
        this['command'] = command;
        return this;
    }
    public withTime(time: string): KillProcessHistoryItem {
        this['time'] = time;
        return this;
    }
    public withInfo(info: string): KillProcessHistoryItem {
        this['info'] = info;
        return this;
    }
    public withState(state: string): KillProcessHistoryItem {
        this['state'] = state;
        return this;
    }
    public withInstanceId(instanceId: string): KillProcessHistoryItem {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): KillProcessHistoryItem {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}