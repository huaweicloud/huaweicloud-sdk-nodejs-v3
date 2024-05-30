

export class GaussDBforOpenGaussListDatabase {
    public name?: string;
    public owner?: string;
    private 'character_set'?: string;
    private 'collate_set'?: string;
    public size?: string;
    public datctype?: string;
    private 'compatibility_type'?: string;
    public constructor() { 
    }
    public withName(name: string): GaussDBforOpenGaussListDatabase {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): GaussDBforOpenGaussListDatabase {
        this['owner'] = owner;
        return this;
    }
    public withCharacterSet(characterSet: string): GaussDBforOpenGaussListDatabase {
        this['character_set'] = characterSet;
        return this;
    }
    public set characterSet(characterSet: string  | undefined) {
        this['character_set'] = characterSet;
    }
    public get characterSet(): string | undefined {
        return this['character_set'];
    }
    public withCollateSet(collateSet: string): GaussDBforOpenGaussListDatabase {
        this['collate_set'] = collateSet;
        return this;
    }
    public set collateSet(collateSet: string  | undefined) {
        this['collate_set'] = collateSet;
    }
    public get collateSet(): string | undefined {
        return this['collate_set'];
    }
    public withSize(size: string): GaussDBforOpenGaussListDatabase {
        this['size'] = size;
        return this;
    }
    public withDatctype(datctype: string): GaussDBforOpenGaussListDatabase {
        this['datctype'] = datctype;
        return this;
    }
    public withCompatibilityType(compatibilityType: string): GaussDBforOpenGaussListDatabase {
        this['compatibility_type'] = compatibilityType;
        return this;
    }
    public set compatibilityType(compatibilityType: string  | undefined) {
        this['compatibility_type'] = compatibilityType;
    }
    public get compatibilityType(): string | undefined {
        return this['compatibility_type'];
    }
}