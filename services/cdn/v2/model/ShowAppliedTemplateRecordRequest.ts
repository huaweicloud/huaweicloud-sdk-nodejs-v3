

export class ShowAppliedTemplateRecordRequest {
    private 'tml_id'?: string;
    private 'tml_name'?: string;
    private 'operator_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withTmlId(tmlId: string): ShowAppliedTemplateRecordRequest {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
    public withTmlName(tmlName: string): ShowAppliedTemplateRecordRequest {
        this['tml_name'] = tmlName;
        return this;
    }
    public set tmlName(tmlName: string  | undefined) {
        this['tml_name'] = tmlName;
    }
    public get tmlName(): string | undefined {
        return this['tml_name'];
    }
    public withOperatorId(operatorId: string): ShowAppliedTemplateRecordRequest {
        this['operator_id'] = operatorId;
        return this;
    }
    public set operatorId(operatorId: string  | undefined) {
        this['operator_id'] = operatorId;
    }
    public get operatorId(): string | undefined {
        return this['operator_id'];
    }
    public withOffset(offset: number): ShowAppliedTemplateRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAppliedTemplateRecordRequest {
        this['limit'] = limit;
        return this;
    }
}