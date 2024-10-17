

export class RdsDbResponseRetList {
    public id?: string;
    private 'ret_status'?: string;
    private 'ret_message'?: string;
    public constructor(id?: string, retStatus?: string, retMessage?: string) { 
        this['id'] = id;
        this['ret_status'] = retStatus;
        this['ret_message'] = retMessage;
    }
    public withId(id: string): RdsDbResponseRetList {
        this['id'] = id;
        return this;
    }
    public withRetStatus(retStatus: string): RdsDbResponseRetList {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): string | undefined {
        return this['ret_status'];
    }
    public withRetMessage(retMessage: string): RdsDbResponseRetList {
        this['ret_message'] = retMessage;
        return this;
    }
    public set retMessage(retMessage: string  | undefined) {
        this['ret_message'] = retMessage;
    }
    public get retMessage(): string | undefined {
        return this['ret_message'];
    }
}