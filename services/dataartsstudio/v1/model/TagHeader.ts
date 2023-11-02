

export class TagHeader {
    public name?: string;
    public dexcription?: object;
    private 'display_text'?: string;
    private 'relation_guid'?: string;
    private 'tag_guid'?: string;
    public constructor() { 
    }
    public withName(name: string): TagHeader {
        this['name'] = name;
        return this;
    }
    public withDexcription(dexcription: object): TagHeader {
        this['dexcription'] = dexcription;
        return this;
    }
    public withDisplayText(displayText: string): TagHeader {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withRelationGuid(relationGuid: string): TagHeader {
        this['relation_guid'] = relationGuid;
        return this;
    }
    public set relationGuid(relationGuid: string  | undefined) {
        this['relation_guid'] = relationGuid;
    }
    public get relationGuid(): string | undefined {
        return this['relation_guid'];
    }
    public withTagGuid(tagGuid: string): TagHeader {
        this['tag_guid'] = tagGuid;
        return this;
    }
    public set tagGuid(tagGuid: string  | undefined) {
        this['tag_guid'] = tagGuid;
    }
    public get tagGuid(): string | undefined {
        return this['tag_guid'];
    }
}