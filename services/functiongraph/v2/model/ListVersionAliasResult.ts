

export class ListVersionAliasResult {
    public name?: string;
    public version?: string;
    public description?: string;
    private 'last_modified'?: Date;
    private 'alias_urn'?: string;
    private 'additional_version_weights'?: { [key: string]: number; };
    public constructor(name?: string, version?: string, lastModified?: Date, aliasUrn?: string) { 
        this['name'] = name;
        this['version'] = version;
        this['last_modified'] = lastModified;
        this['alias_urn'] = aliasUrn;
    }
    public withName(name: string): ListVersionAliasResult {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ListVersionAliasResult {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): ListVersionAliasResult {
        this['description'] = description;
        return this;
    }
    public withLastModified(lastModified: Date): ListVersionAliasResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withAliasUrn(aliasUrn: string): ListVersionAliasResult {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withAdditionalVersionWeights(additionalVersionWeights: { [key: string]: number; }): ListVersionAliasResult {
        this['additional_version_weights'] = additionalVersionWeights;
        return this;
    }
    public set additionalVersionWeights(additionalVersionWeights: { [key: string]: number; }  | undefined) {
        this['additional_version_weights'] = additionalVersionWeights;
    }
    public get additionalVersionWeights(): { [key: string]: number; } | undefined {
        return this['additional_version_weights'];
    }
}