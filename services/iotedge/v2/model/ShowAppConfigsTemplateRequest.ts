

export class ShowAppConfigsTemplateRequest {
    private 'tpl_id'?: string;
    public constructor(tplId?: string) { 
        this['tpl_id'] = tplId;
    }
    public withTplId(tplId: string): ShowAppConfigsTemplateRequest {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
}