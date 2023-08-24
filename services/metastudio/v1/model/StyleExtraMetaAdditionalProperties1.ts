

export class StyleExtraMetaAdditionalProperties1 {
    public type?: string;
    private 'match_component'?: string;
    public files?: Array<string>;
    private 'classified_tags'?: { [key: string]: Array<string>; };
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): StyleExtraMetaAdditionalProperties1 {
        this['type'] = type;
        return this;
    }
    public withMatchComponent(matchComponent: string): StyleExtraMetaAdditionalProperties1 {
        this['match_component'] = matchComponent;
        return this;
    }
    public set matchComponent(matchComponent: string  | undefined) {
        this['match_component'] = matchComponent;
    }
    public get matchComponent(): string | undefined {
        return this['match_component'];
    }
    public withFiles(files: Array<string>): StyleExtraMetaAdditionalProperties1 {
        this['files'] = files;
        return this;
    }
    public withClassifiedTags(classifiedTags: { [key: string]: Array<string>; }): StyleExtraMetaAdditionalProperties1 {
        this['classified_tags'] = classifiedTags;
        return this;
    }
    public set classifiedTags(classifiedTags: { [key: string]: Array<string>; }  | undefined) {
        this['classified_tags'] = classifiedTags;
    }
    public get classifiedTags(): { [key: string]: Array<string>; } | undefined {
        return this['classified_tags'];
    }
}