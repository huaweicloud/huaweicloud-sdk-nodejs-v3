

export class StackSetVarsURIContentPrimitiveTypeHolder {
    private 'vars_uri_content'?: string;
    public constructor() { 
    }
    public withVarsUriContent(varsUriContent: string): StackSetVarsURIContentPrimitiveTypeHolder {
        this['vars_uri_content'] = varsUriContent;
        return this;
    }
    public set varsUriContent(varsUriContent: string  | undefined) {
        this['vars_uri_content'] = varsUriContent;
    }
    public get varsUriContent(): string | undefined {
        return this['vars_uri_content'];
    }
}