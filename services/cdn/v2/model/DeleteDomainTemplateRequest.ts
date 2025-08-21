

export class DeleteDomainTemplateRequest {
    private 'tml_id'?: string;
    public constructor(tmlId?: string) { 
        this['tml_id'] = tmlId;
    }
    public withTmlId(tmlId: string): DeleteDomainTemplateRequest {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
}