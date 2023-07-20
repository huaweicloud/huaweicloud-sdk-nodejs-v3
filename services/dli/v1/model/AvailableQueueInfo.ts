

export class AvailableQueueInfo {
    public status?: string;
    public name?: string;
    public uuid?: string;
    private 'err_msg'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withStatus(status: string): AvailableQueueInfo {
        this['status'] = status;
        return this;
    }
    public withName(name: string): AvailableQueueInfo {
        this['name'] = name;
        return this;
    }
    public withUuid(uuid: string): AvailableQueueInfo {
        this['uuid'] = uuid;
        return this;
    }
    public withErrMsg(errMsg: string): AvailableQueueInfo {
        this['err_msg'] = errMsg;
        return this;
    }
    public set errMsg(errMsg: string  | undefined) {
        this['err_msg'] = errMsg;
    }
    public get errMsg(): string | undefined {
        return this['err_msg'];
    }
    public withUpdateTime(updateTime: number): AvailableQueueInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}