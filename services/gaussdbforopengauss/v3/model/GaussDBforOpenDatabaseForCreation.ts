

export class GaussDBforOpenDatabaseForCreation {
    public name?: string;
    private 'character_set'?: string;
    public owner?: string;
    public template?: string;
    private 'lc_collate'?: string;
    private 'lc_ctype'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): GaussDBforOpenDatabaseForCreation {
        this['name'] = name;
        return this;
    }
    public withCharacterSet(characterSet: string): GaussDBforOpenDatabaseForCreation {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withOwner(owner: string): GaussDBforOpenDatabaseForCreation {
        this['owner'] = owner;
        return this;
    }
    public withTemplate(template: string): GaussDBforOpenDatabaseForCreation {
        this['template'] = template;
        return this;
    }
    public withLcCollate(lcCollate: string): GaussDBforOpenDatabaseForCreation {
        this['lc_collate'] = lcCollate;
        return this;
    }
    public set lcCollate(lcCollate: string  | undefined) {
        this['lc_collate'] = lcCollate;
    }
    public get lcCollate(): string | undefined {
        return this['lc_collate'];
    }
    public withLcCtype(lcCtype: string): GaussDBforOpenDatabaseForCreation {
        this['lc_ctype'] = lcCtype;
        return this;
    }
    public set lcCtype(lcCtype: string  | undefined) {
        this['lc_ctype'] = lcCtype;
    }
    public get lcCtype(): string | undefined {
        return this['lc_ctype'];
    }
}