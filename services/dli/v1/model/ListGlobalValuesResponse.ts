import { ListGlobalValue } from './ListGlobalValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalValuesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'global_vars'?: Array<ListGlobalValue>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListGlobalValuesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListGlobalValuesResponse {
        this['message'] = message;
        return this;
    }
    public withGlobalVars(globalVars: Array<ListGlobalValue>): ListGlobalValuesResponse {
        this['global_vars'] = globalVars;
        return this;
    }
    public set globalVars(globalVars: Array<ListGlobalValue>  | undefined) {
        this['global_vars'] = globalVars;
    }
    public get globalVars(): Array<ListGlobalValue> | undefined {
        return this['global_vars'];
    }
    public withCount(count: number): ListGlobalValuesResponse {
        this['count'] = count;
        return this;
    }
}