import { GlobalVariable } from './GlobalVariable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalVariablesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'global_vars'?: Array<GlobalVariable>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListGlobalVariablesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListGlobalVariablesResponse {
        this['message'] = message;
        return this;
    }
    public withGlobalVars(globalVars: Array<GlobalVariable>): ListGlobalVariablesResponse {
        this['global_vars'] = globalVars;
        return this;
    }
    public set globalVars(globalVars: Array<GlobalVariable>  | undefined) {
        this['global_vars'] = globalVars;
    }
    public get globalVars(): Array<GlobalVariable> | undefined {
        return this['global_vars'];
    }
    public withCount(count: number): ListGlobalVariablesResponse {
        this['count'] = count;
        return this;
    }
}