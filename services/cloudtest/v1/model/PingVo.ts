

export class PingVo {
    public address?: string;
    private 'sub_task_name'?: string;
    public constructor() { 
    }
    public withAddress(address: string): PingVo {
        this['address'] = address;
        return this;
    }
    public withSubTaskName(subTaskName: string): PingVo {
        this['sub_task_name'] = subTaskName;
        return this;
    }
    public set subTaskName(subTaskName: string  | undefined) {
        this['sub_task_name'] = subTaskName;
    }
    public get subTaskName(): string | undefined {
        return this['sub_task_name'];
    }
}