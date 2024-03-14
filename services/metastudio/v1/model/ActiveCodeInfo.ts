

export class ActiveCodeInfo {
    private 'active_code_id'?: string;
    private 'active_code'?: string;
    private 'robot_id'?: string;
    private 'room_id'?: string;
    private 'valid_period'?: number;
    private 'expire_time'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withActiveCodeId(activeCodeId: string): ActiveCodeInfo {
        this['active_code_id'] = activeCodeId;
        return this;
    }
    public set activeCodeId(activeCodeId: string  | undefined) {
        this['active_code_id'] = activeCodeId;
    }
    public get activeCodeId(): string | undefined {
        return this['active_code_id'];
    }
    public withActiveCode(activeCode: string): ActiveCodeInfo {
        this['active_code'] = activeCode;
        return this;
    }
    public set activeCode(activeCode: string  | undefined) {
        this['active_code'] = activeCode;
    }
    public get activeCode(): string | undefined {
        return this['active_code'];
    }
    public withRobotId(robotId: string): ActiveCodeInfo {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withRoomId(roomId: string): ActiveCodeInfo {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withValidPeriod(validPeriod: number): ActiveCodeInfo {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: number  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): number | undefined {
        return this['valid_period'];
    }
    public withExpireTime(expireTime: string): ActiveCodeInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withCreateTime(createTime: string): ActiveCodeInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ActiveCodeInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}