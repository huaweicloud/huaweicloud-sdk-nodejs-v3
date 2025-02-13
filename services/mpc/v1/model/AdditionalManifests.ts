

export class AdditionalManifests {
    private 'manifest_name_modifier'?: string;
    private 'selected_outputs'?: Array<string>;
    public constructor() { 
    }
    public withManifestNameModifier(manifestNameModifier: string): AdditionalManifests {
        this['manifest_name_modifier'] = manifestNameModifier;
        return this;
    }
    public set manifestNameModifier(manifestNameModifier: string  | undefined) {
        this['manifest_name_modifier'] = manifestNameModifier;
    }
    public get manifestNameModifier(): string | undefined {
        return this['manifest_name_modifier'];
    }
    public withSelectedOutputs(selectedOutputs: Array<string>): AdditionalManifests {
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