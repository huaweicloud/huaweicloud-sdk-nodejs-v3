

export class AlarmTags {
    private 'auto_tags'?: Array<string>;
    private 'custom_tags'?: Array<string>;
    private 'custom_annotations'?: Array<string>;
    public constructor() { 
    }
    public withAutoTags(autoTags: Array<string>): AlarmTags {
        this['auto_tags'] = autoTags;
        return this;
    }
    public set autoTags(autoTags: Array<string>  | undefined) {
        this['auto_tags'] = autoTags;
    }
    public get autoTags(): Array<string> | undefined {
        return this['auto_tags'];
    }
    public withCustomTags(customTags: Array<string>): AlarmTags {
        this['custom_tags'] = customTags;
        return this;
    }
    public set customTags(customTags: Array<string>  | undefined) {
        this['custom_tags'] = customTags;
    }
    public get customTags(): Array<string> | undefined {
        return this['custom_tags'];
    }
    public withCustomAnnotations(customAnnotations: Array<string>): AlarmTags {
        this['custom_annotations'] = customAnnotations;
        return this;
    }
    public set customAnnotations(customAnnotations: Array<string>  | undefined) {
        this['custom_annotations'] = customAnnotations;
    }
    public get customAnnotations(): Array<string> | undefined {
        return this['custom_annotations'];
    }
}