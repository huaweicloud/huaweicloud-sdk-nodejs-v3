

export class ShowPtrRequest {
    private 'ptr_id'?: string;
    public constructor(ptrId?: string) { 
        this['ptr_id'] = ptrId;
    }
    public withPtrId(ptrId: string): ShowPtrRequest {
        this['ptr_id'] = ptrId;
        return this;
    }
    public set ptrId(ptrId: string  | undefined) {
        this['ptr_id'] = ptrId;
    }
    public get ptrId(): string | undefined {
        return this['ptr_id'];
    }
}