

export class ListVersionAliasResult {
    public name: string;
    public version: string;
    public description?: string;
    private 'last_modified': Date | undefined;
    private 'alias_urn': string | undefined;
    private 'additional_version_weights'?: { [key: string]: number; } | undefined;
    public constructor(name?: any, version?: any, lastModified?: any, aliasUrn?: any) { 
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
    public set lastModified(lastModified: Date | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withAliasUrn(aliasUrn: string): ListVersionAliasResult {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn() {
        return this['alias_urn'];
    }
    public withAdditionalVersionWeights(additionalVersionWeights: { [key: string]: number; }): ListVersionAliasResult {
        this['additional_version_weights'] = additionalVersionWeights;
        return this;
    }
    public set additionalVersionWeights(additionalVersionWeights: { [key: string]: number; } | undefined) {
        this['additional_version_weights'] = additionalVersionWeights;
    }
    public get additionalVersionWeights() {
        return this['additional_version_weights'];
    }
}