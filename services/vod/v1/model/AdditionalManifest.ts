

export class AdditionalManifest {
    private 'manifest_name_modifier'?: string;
    private 'selected_outputs'?: Array<string>;
    public constructor(manifestNameModifier?: string, selectedOutputs?: Array<string>) { 
        this['manifest_name_modifier'] = manifestNameModifier;
        this['selected_outputs'] = selectedOutputs;
    }
    public withManifestNameModifier(manifestNameModifier: string): AdditionalManifest {
        this['manifest_name_modifier'] = manifestNameModifier;
        return this;
    }
    public set manifestNameModifier(manifestNameModifier: string  | undefined) {
        this['manifest_name_modifier'] = manifestNameModifier;
    }
    public get manifestNameModifier(): string | undefined {
        return this['manifest_name_modifier'];
    }
    public withSelectedOutputs(selectedOutputs: Array<string>): AdditionalManifest {
        this['selected_outputs'] = selectedOutputs;
        return this;
    }
    public set selectedOutputs(selectedOutputs: Array<string>  | undefined) {
        this['selected_outputs'] = selectedOutputs;
    }
    public get selectedOutputs(): Array<string> | undefined {
        return this['selected_outputs'];
    }
}