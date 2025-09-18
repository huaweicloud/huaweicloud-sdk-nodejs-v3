

export class ExtensionExtendProp {
    private 'api_options'?: string;
    private 'api_type'?: string;
    private 'show_placeholder'?: string;
    public options?: string;
    private 'disabled_conditions'?: string;
    private 'visible_conditions'?: string;
    public constructor() { 
    }
    public withApiOptions(apiOptions: string): ExtensionExtendProp {
        this['api_options'] = apiOptions;
        return this;
    }
    public set apiOptions(apiOptions: string  | undefined) {
        this['api_options'] = apiOptions;
    }
    public get apiOptions(): string | undefined {
        return this['api_options'];
    }
    public withApiType(apiType: string): ExtensionExtendProp {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: string  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): string | undefined {
        return this['api_type'];
    }
    public withShowPlaceholder(showPlaceholder: string): ExtensionExtendProp {
        this['show_placeholder'] = showPlaceholder;
        return this;
    }
    public set showPlaceholder(showPlaceholder: string  | undefined) {
        this['show_placeholder'] = showPlaceholder;
    }
    public get showPlaceholder(): string | undefined {
        return this['show_placeholder'];
    }
    public withOptions(options: string): ExtensionExtendProp {
        this['options'] = options;
        return this;
    }
    public withDisabledConditions(disabledConditions: string): ExtensionExtendProp {
        this['disabled_conditions'] = disabledConditions;
        return this;
    }
    public set disabledConditions(disabledConditions: string  | undefined) {
        this['disabled_conditions'] = disabledConditions;
    }
    public get disabledConditions(): string | undefined {
        return this['disabled_conditions'];
    }
    public withVisibleConditions(visibleConditions: string): ExtensionExtendProp {
        this['visible_conditions'] = visibleConditions;
        return this;
    }
    public set visibleConditions(visibleConditions: string  | undefined) {
        this['visible_conditions'] = visibleConditions;
    }
    public get visibleConditions(): string | undefined {
        return this['visible_conditions'];
    }
}