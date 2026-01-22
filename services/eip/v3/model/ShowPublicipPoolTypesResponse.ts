import { PublicPoolType } from './PublicPoolType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicipPoolTypesResponse extends SdkResponse {
    private 'publicip-pool-types'?: PublicPoolType;
    public constructor() { 
        super();
    }
    public withPublicipPoolTypes(publicipPoolTypes: PublicPoolType): ShowPublicipPoolTypesResponse {
        this['publicip-pool-types'] = publicipPoolTypes;
        return this;
    }
    public set publicipPoolTypes(publicipPoolTypes: PublicPoolType  | undefined) {
        this['publicip-pool-types'] = publicipPoolTypes;
    }
    public get publicipPoolTypes(): PublicPoolType | undefined {
        return this['publicip-pool-types'];
    }
}