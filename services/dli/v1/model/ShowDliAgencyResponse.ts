
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDliAgencyResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public version?: string;
    private 'current_roles'?: Array<string>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowDliAgencyResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowDliAgencyResponse {
        this['message'] = message;
        return this;
    }
    public withVersion(version: string): ShowDliAgencyResponse {
        this['version'] = version;
        return this;
    }
    public withCurrentRoles(currentRoles: Array<string>): ShowDliAgencyResponse {
        this['current_roles'] = currentRoles;
        return this;
    }
    public set currentRoles(currentRoles: Array<string>  | undefined) {
        this['current_roles'] = currentRoles;
    }
    public get currentRoles(): Array<string> | undefined {
        return this['current_roles'];
    }
}