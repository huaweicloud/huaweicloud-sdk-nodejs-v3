

export class DatabaseForCreation {
    public name?: string;
    private 'character_set'?: string;
    public comment?: string;
    public constructor(name?: string, characterSet?: string) { 
        this['name'] = name;
        this['character_set'] = characterSet;
    }
    public withName(name: string): DatabaseForCreation {
        this['name'] = name;
        return this;
    }
    public withCharacterSet(characterSet: string): DatabaseForCreation {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withComment(comment: string): DatabaseForCreation {
        this['comment'] = comment;
        return this;
    }
}