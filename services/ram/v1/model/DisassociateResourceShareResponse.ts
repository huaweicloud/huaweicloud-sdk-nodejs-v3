import { ResourceShareAssociation } from './ResourceShareAssociation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateResourceShareResponse extends SdkResponse {
    private 'resource_share_associations'?: Array<ResourceShareAssociation>;
    public constructor() { 
        super();
    }
    public withResourceShareAssociations(resourceShareAssociations: Array<ResourceShareAssociation>): DisassociateResourceShareResponse {
        this['resource_share_associations'] = resourceShareAssociations;
        return this;
    }
    public set resourceShareAssociations(resourceShareAssociations: Array<ResourceShareAssociation>  | undefined) {
        this['resource_share_associations'] = resourceShareAssociations;
    }
    public get resourceShareAssociations(): Array<ResourceShareAssociation> | undefined {
        return this['resource_share_associations'];
    }
}