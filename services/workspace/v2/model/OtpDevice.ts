

export class OtpDevice {
    public id?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    public status?: OtpDeviceStatusEnum | string;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): OtpDevice {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): OtpDevice {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): OtpDevice {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withStatus(status: OtpDeviceStatusEnum | string): OtpDevice {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): OtpDevice {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OtpDeviceStatusEnum {
    UNREGISTER = 'UNREGISTER',
    REGISTERED = 'REGISTERED'
}
