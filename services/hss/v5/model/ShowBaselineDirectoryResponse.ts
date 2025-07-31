import { SecurityCheckTaskCondition } from './SecurityCheckTaskCondition';
import { ShowBaselineDirectoryInfo } from './ShowBaselineDirectoryInfo';
import { ShowPwdDirectoryInfo } from './ShowPwdDirectoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaselineDirectoryResponse extends SdkResponse {
    private 'task_condition'?: SecurityCheckTaskCondition;
    private 'baseline_directory_list'?: Array<ShowBaselineDirectoryInfo>;
    private 'pwd_directory_list'?: Array<ShowPwdDirectoryInfo>;
    public constructor() { 
        super();
    }
    public withTaskCondition(taskCondition: SecurityCheckTaskCondition): ShowBaselineDirectoryResponse {
        this['task_condition'] = taskCondition;
        return this;
    }
    public set taskCondition(taskCondition: SecurityCheckTaskCondition  | undefined) {
        this['task_condition'] = taskCondition;
    }
    public get taskCondition(): SecurityCheckTaskCondition | undefined {
        return this['task_condition'];
    }
    public withBaselineDirectoryList(baselineDirectoryList: Array<ShowBaselineDirectoryInfo>): ShowBaselineDirectoryResponse {
        this['baseline_directory_list'] = baselineDirectoryList;
        return this;
    }
    public set baselineDirectoryList(baselineDirectoryList: Array<ShowBaselineDirectoryInfo>  | undefined) {
        this['baseline_directory_list'] = baselineDirectoryList;
    }
    public get baselineDirectoryList(): Array<ShowBaselineDirectoryInfo> | undefined {
        return this['baseline_directory_list'];
    }
    public withPwdDirectoryList(pwdDirectoryList: Array<ShowPwdDirectoryInfo>): ShowBaselineDirectoryResponse {
        this['pwd_directory_list'] = pwdDirectoryList;
        return this;
    }
    public set pwdDirectoryList(pwdDirectoryList: Array<ShowPwdDirectoryInfo>  | undefined) {
        this['pwd_directory_list'] = pwdDirectoryList;
    }
    public get pwdDirectoryList(): Array<ShowPwdDirectoryInfo> | undefined {
        return this['pwd_directory_list'];
    }
}