

export class PostgresqlListDatabase {
    public name?: string;
    public owner?: string;
    private 'character_set'?: string;
    private 'collate_set'?: string;
    public size?: number;
    public comment?: string;
    public constructor() { 
    }
    public withName(name: string): PostgresqlListDatabase {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): PostgresqlListDatabase {
        this['owner'] = owner;
        return this;
    }
    public withCharacterSet(characterSet: string): PostgresqlListDatabase {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withCollateSet(collateSet: string): PostgresqlListDatabase {
        this['collate_set'] = collateSet;
        return this;
    }
    public set collateSet(collateSet: string  | undefined) {
        this['collate_set'] = collateSet;
    }
    public get collateSet(): string | undefined {
        return this['collate_set'];
    }
    public withSize(size: number): PostgresqlListDatabase {
        this['size'] = size;
        return this;
    }
    public withComment(comment: string): PostgresqlListDatabase {
        this['comment'] = comment;
        return this;
    }
}