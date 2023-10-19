import { AppQuotaAppBinding } from './AppQuotaAppBinding';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateAppsForAppQuotaResponse extends SdkResponse {
    public applies?: Array<AppQuotaAppBinding>;
    public constructor() { 
        super();
    }
    public withApplies(applies: Array<AppQuotaAppBinding>): AssociateAppsForAppQuotaResponse {
        this['applies'] = applies;
        return this;
    }
}