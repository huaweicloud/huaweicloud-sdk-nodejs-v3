import { GroupParameterDiffInfo } from './GroupParameterDiffInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeConfigurationResponse extends SdkResponse {
    public name?: string;
    private 'diff_parameters'?: Array<GroupParameterDiffInfo>;
    private 'skipped_parameter_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withName(name: string): UpgradeConfigurationResponse {
        this['name'] = name;
        return this;
    }
    public withDiffParameters(diffParameters: Array<GroupParameterDiffInfo>): UpgradeConfigurationResponse {
        this['diff_parameters'] = diffParameters;
        return this;
    }
    public set diffParameters(diffParameters: Array<GroupParameterDiffInfo>  | undefined) {
        this['diff_parameters'] = diffParameters;
    }
    public get diffParameters(): Array<GroupParameterDiffInfo> | undefined {
        return this['diff_parameters'];
    }
    public withSkippedParameterNames(skippedParameterNames: Array<string>): UpgradeConfigurationResponse {
        this['skipped_parameter_names'] = skippedParameterNames;
        return this;
    }
    public set skippedParameterNames(skippedParameterNames: Array<string>  | undefined) {
        this['skipped_parameter_names'] = skippedParameterNames;
    }
    public get skippedParameterNames(): Array<string> | undefined {
        return this['skipped_parameter_names'];
    }
}