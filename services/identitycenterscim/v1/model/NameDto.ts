

export class NameDto {
    public formatted?: string;
    public familyName?: string;
    public givenName?: string;
    public middleName?: string;
    public honorificPrefix?: string;
    public honorificSuffix?: string;
    public constructor(familyName?: string, givenName?: string) { 
        this['familyName'] = familyName;
        this['givenName'] = givenName;
    }
    public withFormatted(formatted: string): NameDto {
        this['formatted'] = formatted;
        return this;
    }
    public withFamilyName(familyName: string): NameDto {
        this['familyName'] = familyName;
        return this;
    }
    public withGivenName(givenName: string): NameDto {
        this['givenName'] = givenName;
        return this;
    }
    public withMiddleName(middleName: string): NameDto {
        this['middleName'] = middleName;
        return this;
    }
    public withHonorificPrefix(honorificPrefix: string): NameDto {
        this['honorificPrefix'] = honorificPrefix;
        return this;
    }
    public withHonorificSuffix(honorificSuffix: string): NameDto {
        this['honorificSuffix'] = honorificSuffix;
        return this;
    }
}