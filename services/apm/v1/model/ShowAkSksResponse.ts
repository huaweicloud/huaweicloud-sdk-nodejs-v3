import { AccessAkskVO } from './AccessAkskVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAkSksResponse extends SdkResponse {
    private 'access_ak_sk_models'?: Array<AccessAkskVO>;
    public constructor() { 
        super();
    }
    public withAccessAkSkModels(accessAkSkModels: Array<AccessAkskVO>): ShowAkSksResponse {
        this['access_ak_sk_models'] = accessAkSkModels;
        return this;
    }
    public set accessAkSkModels(accessAkSkModels: Array<AccessAkskVO>  | undefined) {
        this['access_ak_sk_models'] = accessAkSkModels;
    }
    public get accessAkSkModels(): Array<AccessAkskVO> | undefined {
        return this['access_ak_sk_models'];
    }
}