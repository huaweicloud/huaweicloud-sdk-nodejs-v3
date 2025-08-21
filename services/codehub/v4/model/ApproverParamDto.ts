

export class ApproverParamDto {
    private 'approver_id'?: number;
    private 'code_owner'?: boolean;
    public accept?: boolean;
    public constructor() { 
    }
    public withApproverId(approverId: number): ApproverParamDto {
        this['approver_id'] = approverId;
        return this;
    }
    public set approverId(approverId: number  | undefined) {
        this['approver_id'] = approverId;
    }
    public get approverId(): number | undefined {
        return this['approver_id'];
    }
    public withCodeOwner(codeOwner: boolean): ApproverParamDto {
        this['code_owner'] = codeOwner;
        return this;
    }
    public set codeOwner(codeOwner: boolean  | undefined) {
        this['code_owner'] = codeOwner;
    }
    public get codeOwner(): boolean | undefined {
        return this['code_owner'];
    }
    public withAccept(accept: boolean): ApproverParamDto {
        this['accept'] = accept;
        return this;
    }
}