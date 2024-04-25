

export class FgacUpdateResult {
    public id?: string;
    public status?: boolean;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withId(id: string): FgacUpdateResult {
        this['id'] = id;
        return this;
    }
    public withStatus(status: boolean): FgacUpdateResult {
        this['status'] = status;
        return this;
    }
    public withErrorMsg(errorMsg: string): FgacUpdateResult {
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