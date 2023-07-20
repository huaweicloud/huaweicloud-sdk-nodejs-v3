import { ApplyConfigurationResponseApplyResults } from './ApplyConfigurationResponseApplyResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableConfigurationResponse extends SdkResponse {
    private 'configuration_id'?: string;
    private 'configuration_name'?: string;
    public success?: boolean;
    private 'apply_results'?: Array<ApplyConfigurationResponseApplyResults>;
    public constructor() { 
        super();
    }
    public withConfigurationId(configurationId: string): EnableConfigurationResponse {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withConfigurationName(configurationName: string): EnableConfigurationResponse {
        this['configuration_name'] = configurationName;
        return this;
    }
    public set configurationName(configurationName: string  | undefined) {
        this['configuration_name'] = configurationName;
    }
    public get configurationName(): string | undefined {
        return this['configuration_name'];
    }
    public withSuccess(success: boolean): EnableConfigurationResponse {
        this['success'] = success;
        return this;
    }
    public withApplyResults(applyResults: Array<ApplyConfigurationResponseApplyResults>): EnableConfigurationResponse {
        this['apply_results'] = applyResults;
        return this;
    }
    public set applyResults(applyResults: Array<ApplyConfigurationResponseApplyResults>  | undefined) {
        this['apply_results'] = applyResults;
    }
    public get applyResults(): Array<ApplyConfigurationResponseApplyResults> | undefined {
        return this['apply_results'];
    }
}