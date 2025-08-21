

export class ShowDomainTemplateRequest {
    private 'tml_name'?: string;
    private 'tml_id'?: string;
    private 'tml_type'?: number;
    public limit?: string;
    public offset?: string;
    public constructor() { 
    }
    public withTmlName(tmlName: string): ShowDomainTemplateRequest {
        this['tml_name'] = tmlName;
        return this;
    }
    public set tmlName(tmlName: string  | undefined) {
        this['tml_name'] = tmlName;
    }
    public get tmlName(): string | undefined {
        return this['tml_name'];
    }
    public withTmlId(tmlId: string): ShowDomainTemplateRequest {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
    public withTmlType(tmlType: number): ShowDomainTemplateRequest {
        this['tml_type'] = tmlType;
        return this;
    }
    public set tmlType(tmlType: number  | undefined) {
        this['tml_type'] = tmlType;
    }
    public get tmlType(): number | undefined {
        return this['tml_type'];
    }
    public withLimit(limit: string): ShowDomainTemplateRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowDomainTemplateRequest {
        this['offset'] = offset;
        return this;
    }
}