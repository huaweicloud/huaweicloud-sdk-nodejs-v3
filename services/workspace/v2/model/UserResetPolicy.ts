

export class UserResetPolicy {
    public enable?: boolean;
    private 'reset_count_per_day'?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): UserResetPolicy {
        this['enable'] = enable;
        return this;
    }
    public withResetCountPerDay(resetCountPerDay: number): UserResetPolicy {
        this['reset_count_per_day'] = resetCountPerDay;
        return this;
    }
    public set resetCountPerDay(resetCountPerDay: number  | undefined) {
        this['reset_count_per_day'] = resetCountPerDay;
    }
    public get resetCountPerDay(): number | undefined {
        return this['reset_count_per_day'];
    }
}