

export class UpdateDpd {
    public interval?: number;
    public timeout?: number;
    public msg?: UpdateDpdMsgEnum | string;
    public constructor() { 
    }
    public withInterval(interval: number): UpdateDpd {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): UpdateDpd {
        this['timeout'] = timeout;
        return this;
    }
    public withMsg(msg: UpdateDpdMsgEnum | string): UpdateDpd {
        this['msg'] = msg;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDpdMsgEnum {
    SEQ_HASH_NOTIFY = 'seq-hash-notify',
    SEQ_NOTIFY_HASH = 'seq-notify-hash'
}
