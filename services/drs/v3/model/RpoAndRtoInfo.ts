

export class RpoAndRtoInfo {
    private 'check_point'?: string;
    public delay?: string;
    private 'gtid_set'?: string;
    public time?: string;
    public constructor() { 
    }
    public withCheckPoint(checkPoint: string): RpoAndRtoInfo {
        this['check_point'] = checkPoint;
        return this;
    }
    public set checkPoint(checkPoint: string  | undefined) {
        this['check_point'] = checkPoint;
    }
    public get checkPoint(): string | undefined {
        return this['check_point'];
    }
    public withDelay(delay: string): RpoAndRtoInfo {
        this['delay'] = delay;
        return this;
    }
    public withGtidSet(gtidSet: string): RpoAndRtoInfo {
        this['gtid_set'] = gtidSet;
        return this;
    }
    public set gtidSet(gtidSet: string  | undefined) {
        this['gtid_set'] = gtidSet;
    }
    public get gtidSet(): string | undefined {
        return this['gtid_set'];
    }
    public withTime(time: string): RpoAndRtoInfo {
        this['time'] = time;
        return this;
    }
}