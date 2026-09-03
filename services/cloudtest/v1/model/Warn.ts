

export class Warn {
    private 'warn_code'?: string;
    private 'warn_msg'?: string;
    public constructor() { 
    }
    public withWarnCode(warnCode: string): Warn {
        this['warn_code'] = warnCode;
        return this;
    }
    public set warnCode(warnCode: string  | undefined) {
        this['warn_code'] = warnCode;
    }
    public get warnCode(): string | undefined {
        return this['warn_code'];
    }
    public withWarnMsg(warnMsg: string): Warn {
        this['warn_msg'] = warnMsg;
        return this;
    }
    public set warnMsg(warnMsg: string  | undefined) {
        this['warn_msg'] = warnMsg;
    }
    public get warnMsg(): string | undefined {
        return this['warn_msg'];
    }
}