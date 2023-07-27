

export class InterfaceAttachmentsReq {
    private 'delete_on_termination'?: boolean;
    public constructor(deleteOnTermination?: boolean) { 
        this['delete_on_termination'] = deleteOnTermination;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): InterfaceAttachmentsReq {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
}