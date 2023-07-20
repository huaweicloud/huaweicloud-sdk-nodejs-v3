import { ParaGroupParameterResult } from './ParaGroupParameterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'engine_version'?: string;
    private 'instance_mode'?: ShowConfigurationDetailResponseInstanceModeEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'configuration_parameters'?: Array<ParaGroupParameterResult>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowConfigurationDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowConfigurationDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowConfigurationDetailResponse {
        this['description'] = description;
        return this;
    }
    public withEngineVersion(engineVersion: string): ShowConfigurationDetailResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstanceMode(instanceMode: ShowConfigurationDetailResponseInstanceModeEnum | string): ShowConfigurationDetailResponse {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: ShowConfigurationDetailResponseInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): ShowConfigurationDetailResponseInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
    public withCreatedAt(createdAt: string): ShowConfigurationDetailResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowConfigurationDetailResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withConfigurationParameters(configurationParameters: Array<ParaGroupParameterResult>): ShowConfigurationDetailResponse {
        this['configuration_parameters'] = configurationParameters;
        return this;
    }
    public set configurationParameters(configurationParameters: Array<ParaGroupParameterResult>  | undefined) {
        this['configuration_parameters'] = configurationParameters;
    }
    public get configurationParameters(): Array<ParaGroupParameterResult> | undefined {
        return this['configuration_parameters'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowConfigurationDetailResponseInstanceModeEnum {
    INDEPENDENT = 'independent',
    HA = 'ha'
}
