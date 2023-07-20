

export class UpdateVersionAliasRequestBody {
    public version?: string;
    public description?: string;
    private 'additional_version_weights'?: { [key: string]: number; };
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): UpdateVersionAliasRequestBody {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): UpdateVersionAliasRequestBody {
        this['description'] = description;
        return this;
    }
    public withAdditionalVersionWeights(additionalVersionWeights: { [key: string]: number; }): UpdateVersionAliasRequestBody {
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