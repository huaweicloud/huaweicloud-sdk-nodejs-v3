

export class ReqAssociatedResourceOpenStatus {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): ReqAssociatedResourceOpenStatus {
        this['status'] = status;
        return this;
    }
}