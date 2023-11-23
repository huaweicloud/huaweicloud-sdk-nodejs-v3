import { AccessCodeModel } from './AccessCodeModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessCodeResponse extends SdkResponse {
    private 'access_codes'?: Array<AccessCodeModel>;
    public constructor() { 
        super();
    }
    public withAccessCodes(accessCodes: Array<AccessCodeModel>): ListAccessCodeResponse {
        this['access_codes'] = accessCodes;
        return this;
    }
    public set accessCodes(accessCodes: Array<AccessCodeModel>  | undefined) {
        this['access_codes'] = accessCodes;
    }
    public get accessCodes(): Array<AccessCodeModel> | undefined {
        return this['access_codes'];
    }
}