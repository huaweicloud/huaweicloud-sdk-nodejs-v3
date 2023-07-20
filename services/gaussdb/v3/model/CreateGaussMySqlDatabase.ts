import { GaussMySqlDatabaseUser } from './GaussMySqlDatabaseUser';


export class CreateGaussMySqlDatabase {
    public name?: string;
    public comment?: string;
    private 'character_set'?: string;
    public users?: Array<GaussMySqlDatabaseUser>;
    public constructor(name?: string, characterSet?: string) { 
        this['name'] = name;
        this['character_set'] = characterSet;
    }
    public withName(name: string): CreateGaussMySqlDatabase {
        this['name'] = name;
        return this;
    }
    public withComment(comment: string): CreateGaussMySqlDatabase {
        this['comment'] = comment;
        return this;
    }
    public withCharacterSet(characterSet: string): CreateGaussMySqlDatabase {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withUsers(users: Array<GaussMySqlDatabaseUser>): CreateGaussMySqlDatabase {
        this['users'] = users;
        return this;
    }
}