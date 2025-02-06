

export class NameDto {
    private 'family_name'?: string;
    public formatted?: string;
    private 'given_name'?: string;
    private 'honorific_prefix'?: string;
    private 'honorific_suffix'?: string;
    private 'middle_name'?: string;
    public constructor(familyName?: string, givenName?: string) { 
        this['family_name'] = familyName;
        this['given_name'] = givenName;
    }
    public withFamilyName(familyName: string): NameDto {
        this['family_name'] = familyName;
        return this;
    }
    public set familyName(familyName: string  | undefined) {
        this['family_name'] = familyName;
    }
    public get familyName(): string | undefined {
        return this['family_name'];
    }
    public withFormatted(formatted: string): NameDto {
        this['formatted'] = formatted;
        return this;
    }
    public withGivenName(givenName: string): NameDto {
        this['given_name'] = givenName;
        return this;
    }
    public set givenName(givenName: string  | undefined) {
        this['given_name'] = givenName;
    }
    public get givenName(): string | undefined {
        return this['given_name'];
    }
    public withHonorificPrefix(honorificPrefix: string): NameDto {
        this['honorific_prefix'] = honorificPrefix;
        return this;
    }
    public set honorificPrefix(honorificPrefix: string  | undefined) {
        this['honorific_prefix'] = honorificPrefix;
    }
    public get honorificPrefix(): string | undefined {
        return this['honorific_prefix'];
    }
    public withHonorificSuffix(honorificSuffix: string): NameDto {
        this['honorific_suffix'] = honorificSuffix;
        return this;
    }
    public set honorificSuffix(honorificSuffix: string  | undefined) {
        this['honorific_suffix'] = honorificSuffix;
    }
    public get honorificSuffix(): string | undefined {
        return this['honorific_suffix'];
    }
    public withMiddleName(middleName: string): NameDto {
        this['middle_name'] = middleName;
        return this;
    }
    public set middleName(middleName: string  | undefined) {
        this['middle_name'] = middleName;
    }
    public get middleName(): string | undefined {
        return this['middle_name'];
    }
}