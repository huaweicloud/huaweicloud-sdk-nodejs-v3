

export class IpsItem {
    public ips?: Array<string>;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withIps(ips: Array<string>): IpsItem {
        this['ips'] = ips;
        return this;
    }
    public withUpdateTime(updateTime: number): IpsItem {
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