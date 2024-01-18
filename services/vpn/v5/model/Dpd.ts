

export class Dpd {
    public interval?: number;
    public timeout?: number;
    public msg?: DpdMsgEnum | string;
    public constructor() { 
    }
    public withInterval(interval: number): Dpd {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): Dpd {
        this['timeout'] = timeout;
        return this;
    }
    public withMsg(msg: DpdMsgEnum | string): Dpd {
        this['msg'] = msg;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DpdMsgEnum {
    SEQ_HASH_NOTIFY = 'seq-hash-notify',
    SEQ_NOTIFY_HASH = 'seq-notify-hash'
}
