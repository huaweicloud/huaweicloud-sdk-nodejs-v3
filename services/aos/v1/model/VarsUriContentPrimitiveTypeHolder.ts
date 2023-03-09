

export class VarsUriContentPrimitiveTypeHolder {
    private 'vars_uri_content'?: string | undefined;
    public constructor() { 
    }
    public withVarsUriContent(varsUriContent: string): VarsUriContentPrimitiveTypeHolder {
        this['vars_uri_content'] = varsUriContent;
        return this;
    }
    public set varsUriContent(varsUriContent: string | undefined) {
        this['vars_uri_content'] = varsUriContent;
    }
    public get varsUriContent() {
        return this['vars_uri_content'];
    }
}