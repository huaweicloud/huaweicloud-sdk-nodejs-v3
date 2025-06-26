

export class AutoLogoutOptions {
    private 'sbc_logout_waiting_time'?: number;
    public constructor() { 
    }
    public withSbcLogoutWaitingTime(sbcLogoutWaitingTime: number): AutoLogoutOptions {
        this['sbc_logout_waiting_time'] = sbcLogoutWaitingTime;
        return this;
    }
    public set sbcLogoutWaitingTime(sbcLogoutWaitingTime: number  | undefined) {
        this['sbc_logout_waiting_time'] = sbcLogoutWaitingTime;
    }
    public get sbcLogoutWaitingTime(): number | undefined {
        return this['sbc_logout_waiting_time'];
    }
}