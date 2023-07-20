

export class SqlserverDatabaseForDetail {
    public name?: string;
    private 'character_set'?: string;
    public state?: string;
    public constructor(name?: string, characterSet?: string, state?: string) { 
        this['name'] = name;
        this['character_set'] = characterSet;
        this['state'] = state;
    }
    public withName(name: string): SqlserverDatabaseForDetail {
        this['name'] = name;
        return this;
    }
    public withCharacterSet(characterSet: string): SqlserverDatabaseForDetail {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withState(state: string): SqlserverDatabaseForDetail {
        this['state'] = state;
        return this;
    }
}