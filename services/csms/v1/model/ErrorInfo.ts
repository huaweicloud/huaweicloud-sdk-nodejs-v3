

export class ErrorInfo {
    public name?: string;
    private 'error_msg'?: string;
    public constructor(name?: string, errorMsg?: string) { 
        this['name'] = name;
        this['error_msg'] = errorMsg;
    }
    public withName(name: string): ErrorInfo {
        this['name'] = name;
        return this;
    }
    public withErrorMsg(errorMsg: string): ErrorInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}