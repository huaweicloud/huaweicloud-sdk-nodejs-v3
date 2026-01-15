

export class I18n {
    private 'zh_cn'?: string;
    private 'en_us'?: string;
    private 'es_us'?: string;
    private 'pt_br'?: string;
    public constructor() { 
    }
    public withZhCn(zhCn: string): I18n {
        this['zh_cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh_cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh_cn'];
    }
    public withEnUs(enUs: string): I18n {
        this['en_us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en_us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en_us'];
    }
    public withEsUs(esUs: string): I18n {
        this['es_us'] = esUs;
        return this;
    }
    public set esUs(esUs: string  | undefined) {
        this['es_us'] = esUs;
    }
    public get esUs(): string | undefined {
        return this['es_us'];
    }
    public withPtBr(ptBr: string): I18n {
        this['pt_br'] = ptBr;
        return this;
    }
    public set ptBr(ptBr: string  | undefined) {
        this['pt_br'] = ptBr;
    }
    public get ptBr(): string | undefined {
        return this['pt_br'];
    }
}