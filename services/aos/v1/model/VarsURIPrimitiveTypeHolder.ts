

export class VarsURIPrimitiveTypeHolder {
    private 'vars_uri'?: string | undefined;
    public constructor() { 
    }
    public withVarsUri(varsUri: string): VarsURIPrimitiveTypeHolder {
        this['vars_uri'] = varsUri;
        return this;
    }
    public set varsUri(varsUri: string | undefined) {
        this['vars_uri'] = varsUri;
    }
    public get varsUri() {
        return this['vars_uri'];
    }
}