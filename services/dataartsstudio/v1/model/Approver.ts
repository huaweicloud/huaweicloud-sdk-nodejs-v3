

export class Approver {
    private 'approver_name'?: string;
    public constructor(approverName?: string) { 
        this['approver_name'] = approverName;
    }
    public withApproverName(approverName: string): Approver {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
}