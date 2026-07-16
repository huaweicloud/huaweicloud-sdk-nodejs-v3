

export class ShowNodeConfigTemplateRequest {
    private 'nodeconfigtemplate_name'?: string;
    public constructor(nodeconfigtemplateName?: string) { 
        this['nodeconfigtemplate_name'] = nodeconfigtemplateName;
    }
    public withNodeconfigtemplateName(nodeconfigtemplateName: string): ShowNodeConfigTemplateRequest {
        this['nodeconfigtemplate_name'] = nodeconfigtemplateName;
        return this;
    }
    public set nodeconfigtemplateName(nodeconfigtemplateName: string  | undefined) {
        this['nodeconfigtemplate_name'] = nodeconfigtemplateName;
    }
    public get nodeconfigtemplateName(): string | undefined {
        return this['nodeconfigtemplate_name'];
    }
}