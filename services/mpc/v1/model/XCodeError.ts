

export class XCodeError {
    public code?: string;
    public msg?: string;
    public constructor() { 
    }
    public withCode(code: string): XCodeError {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): XCodeError {
        this['msg'] = msg;
        return this;
    }
}