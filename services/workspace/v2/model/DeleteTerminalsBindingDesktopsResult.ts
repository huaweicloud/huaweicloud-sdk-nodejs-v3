

export class DeleteTerminalsBindingDesktopsResult {
    public id?: string;
    private 'delete_result_code'?: string;
    private 'delete_result_msg'?: string;
    public constructor() { 
    }
    public withId(id: string): DeleteTerminalsBindingDesktopsResult {
        this['id'] = id;
        return this;
    }
    public withDeleteResultCode(deleteResultCode: string): DeleteTerminalsBindingDesktopsResult {
        this['delete_result_code'] = deleteResultCode;
        return this;
    }
    public set deleteResultCode(deleteResultCode: string  | undefined) {
        this['delete_result_code'] = deleteResultCode;
    }
    public get deleteResultCode(): string | undefined {
        return this['delete_result_code'];
    }
    public withDeleteResultMsg(deleteResultMsg: string): DeleteTerminalsBindingDesktopsResult {
        this['delete_result_msg'] = deleteResultMsg;
        return this;
    }
    public set deleteResultMsg(deleteResultMsg: string  | undefined) {
        this['delete_result_msg'] = deleteResultMsg;
    }
    public get deleteResultMsg(): string | undefined {
        return this['delete_result_msg'];
    }
}