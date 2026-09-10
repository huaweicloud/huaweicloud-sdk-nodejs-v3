

export class OperateRecord {
    private 'operate_type'?: string;
    private 'user_name'?: string;
    private 'operate_time'?: number;
    public level?: string;
    public constructor() { 
    }
    public withOperateType(operateType: string): OperateRecord {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withUserName(userName: string): OperateRecord {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOperateTime(operateTime: number): OperateRecord {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: number  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): number | undefined {
        return this['operate_time'];
    }
    public withLevel(level: string): OperateRecord {
        this['level'] = level;
        return this;
    }
}