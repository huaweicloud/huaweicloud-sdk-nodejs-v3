

export class TimelineInfo {
    public name?: string;
    public status?: string;
    private 'operation_time'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withName(name: string): TimelineInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): TimelineInfo {
        this['status'] = status;
        return this;
    }
    public withOperationTime(operationTime: string): TimelineInfo {
        this['operation_time'] = operationTime;
        return this;
    }
    public set operationTime(operationTime: string  | undefined) {
        this['operation_time'] = operationTime;
    }
    public get operationTime(): string | undefined {
        return this['operation_time'];
    }
    public withUserName(userName: string): TimelineInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}