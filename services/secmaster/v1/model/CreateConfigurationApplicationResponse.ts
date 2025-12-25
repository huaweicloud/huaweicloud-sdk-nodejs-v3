import { ComponentConfiguration } from './ComponentConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfigurationApplicationResponse extends SdkResponse {
    private 'apply_fail_list'?: Array<ComponentConfiguration>;
    private 'apply_success_list'?: Array<ComponentConfiguration>;
    public constructor() { 
        super();
    }
    public withApplyFailList(applyFailList: Array<ComponentConfiguration>): CreateConfigurationApplicationResponse {
        this['apply_fail_list'] = applyFailList;
        return this;
    }
    public set applyFailList(applyFailList: Array<ComponentConfiguration>  | undefined) {
        this['apply_fail_list'] = applyFailList;
    }
    public get applyFailList(): Array<ComponentConfiguration> | undefined {
        return this['apply_fail_list'];
    }
    public withApplySuccessList(applySuccessList: Array<ComponentConfiguration>): CreateConfigurationApplicationResponse {
        this['apply_success_list'] = applySuccessList;
        return this;
    }
    public set applySuccessList(applySuccessList: Array<ComponentConfiguration>  | undefined) {
        this['apply_success_list'] = applySuccessList;
    }
    public get applySuccessList(): Array<ComponentConfiguration> | undefined {
        return this['apply_success_list'];
    }
}