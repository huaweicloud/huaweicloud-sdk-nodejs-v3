

export class RegionLocales {
    private 'zh-cn'?: string;
    private 'en-us'?: string;
    private 'pt-br'?: string;
    private 'es-us'?: string;
    private 'es-es'?: string;
    public constructor(zhCn?: string, enUs?: string) { 
        this['zh-cn'] = zhCn;
        this['en-us'] = enUs;
    }
    public withZhCn(zhCn: string): RegionLocales {
        this['zh-cn'] = zhCn;
        return this;
    }
    public set zhCn(zhCn: string  | undefined) {
        this['zh-cn'] = zhCn;
    }
    public get zhCn(): string | undefined {
        return this['zh-cn'];
    }
    public withEnUs(enUs: string): RegionLocales {
        this['en-us'] = enUs;
        return this;
    }
    public set enUs(enUs: string  | undefined) {
        this['en-us'] = enUs;
    }
    public get enUs(): string | undefined {
        return this['en-us'];
    }
    public withPtBr(ptBr: string): RegionLocales {
        this['pt-br'] = ptBr;
        return this;
    }
    public set ptBr(ptBr: string  | undefined) {
        this['pt-br'] = ptBr;
    }
    public get ptBr(): string | undefined {
        return this['pt-br'];
    }
    public withEsUs(esUs: string): RegionLocales {
        this['es-us'] = esUs;
        return this;
    }
    public set esUs(esUs: string  | undefined) {
        this['es-us'] = esUs;
    }
    public get esUs(): string | undefined {
        return this['es-us'];
    }
    public withEsEs(esEs: string): RegionLocales {
        this['es-es'] = esEs;
        return this;
    }
    public set esEs(esEs: string  | undefined) {
        this['es-es'] = esEs;
    }
    public get esEs(): string | undefined {
        return this['es-es'];
    }
}