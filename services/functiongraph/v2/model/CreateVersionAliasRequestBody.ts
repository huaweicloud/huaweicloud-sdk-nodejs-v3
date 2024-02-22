import { VersionStrategy } from './VersionStrategy';


export class CreateVersionAliasRequestBody {
    public name?: string;
    public version?: string;
    public description?: string;
    private 'additional_version_weights'?: { [key: string]: number; };
    private 'additional_version_strategy'?: { [key: string]: VersionStrategy; };
    public constructor(name?: string, version?: string) { 
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
    public set additionalVersionWeights(additionalVersionWeights: { [key: string]: number; }  | undefined) {
        this['additional_version_weights'] = additionalVersionWeights;
    }
    public get additionalVersionWeights(): { [key: string]: number; } | undefined {
        return this['additional_version_weights'];
    }
    public withAdditionalVersionStrategy(additionalVersionStrategy: { [key: string]: VersionStrategy; }): CreateVersionAliasRequestBody {
        this['additional_version_strategy'] = additionalVersionStrategy;
        return this;
    }
    public set additionalVersionStrategy(additionalVersionStrategy: { [key: string]: VersionStrategy; }  | undefined) {
        this['additional_version_strategy'] = additionalVersionStrategy;
    }
    public get additionalVersionStrategy(): { [key: string]: VersionStrategy; } | undefined {
        return this['additional_version_strategy'];
    }
}