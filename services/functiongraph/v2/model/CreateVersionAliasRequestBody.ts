

export class CreateVersionAliasRequestBody {
    public name: string;
    public version: string;
    public description?: string;
    private 'additional_version_weights'?: { [key: string]: number; } | undefined;
    public constructor(name?: any, version?: any) { 
        this['name'] = name;
        this['version'] = version;
    }
    public withName(name: string): CreateVersionAliasRequestBody {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): CreateVersionAliasRequestBody {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): CreateVersionAliasRequestBody {
        this['description'] = description;
        return this;
    }
    public withAdditionalVersionWeights(additionalVersionWeights: { [key: string]: number; }): CreateVersionAliasRequestBody {
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