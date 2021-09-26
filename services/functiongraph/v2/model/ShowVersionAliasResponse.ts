
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionAliasResponse extends SdkResponse {
    public name?: string;
    public version?: string;
    public description?: string;
    private 'last_modified'?: Date | undefined;
    private 'alias_urn'?: string | undefined;
    private 'additional_version_weights'?: { [key: string]: number; } | undefined;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowVersionAliasResponse {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ShowVersionAliasResponse {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): ShowVersionAliasResponse {
        this['description'] = description;
        return this;
    }
    public withLastModified(lastModified: Date): ShowVersionAliasResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withAliasUrn(aliasUrn: string): ShowVersionAliasResponse {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn() {
        return this['alias_urn'];
    }
    public withAdditionalVersionWeights(additionalVersionWeights: { [key: string]: number; }): ShowVersionAliasResponse {
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