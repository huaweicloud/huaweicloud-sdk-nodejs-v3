import { IdentityStoreDto } from './IdentityStoreDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIdentityStoreAssociationResponse extends SdkResponse {
    private 'identity_store_associations'?: Array<IdentityStoreDto>;
    public constructor() { 
        super();
    }
    public withIdentityStoreAssociations(identityStoreAssociations: Array<IdentityStoreDto>): ListIdentityStoreAssociationResponse {
        this['identity_store_associations'] = identityStoreAssociations;
        return this;
    }
    public set identityStoreAssociations(identityStoreAssociations: Array<IdentityStoreDto>  | undefined) {
        this['identity_store_associations'] = identityStoreAssociations;
    }
    public get identityStoreAssociations(): Array<IdentityStoreDto> | undefined {
        return this['identity_store_associations'];
    }
}