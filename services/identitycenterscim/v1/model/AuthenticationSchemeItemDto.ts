

export class AuthenticationSchemeItemDto {
    public type?: string;
    public name?: string;
    public description?: string;
    public specUri?: string;
    public documentationUri?: string;
    public primary?: boolean;
    public constructor() { 
    }
    public withType(type: string): AuthenticationSchemeItemDto {
        this['type'] = type;
        return this;
    }
    public withName(name: string): AuthenticationSchemeItemDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AuthenticationSchemeItemDto {
        this['description'] = description;
        return this;
    }
    public withSpecUri(specUri: string): AuthenticationSchemeItemDto {
        this['specUri'] = specUri;
        return this;
    }
    public withDocumentationUri(documentationUri: string): AuthenticationSchemeItemDto {
        this['documentationUri'] = documentationUri;
        return this;
    }
    public withPrimary(primary: boolean): AuthenticationSchemeItemDto {
        this['primary'] = primary;
        return this;
    }
}