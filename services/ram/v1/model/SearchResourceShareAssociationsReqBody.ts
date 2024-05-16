

export class SearchResourceShareAssociationsReqBody {
    private 'association_status'?: string;
    private 'association_type'?: SearchResourceShareAssociationsReqBodyAssociationTypeEnum | string;
    public limit?: number;
    public marker?: string;
    public principal?: string;
    private 'resource_urn'?: string;
    private 'resource_share_ids'?: Array<string>;
    private 'resource_ids'?: Array<string>;
    public constructor(associationType?: string) { 
        this['association_type'] = associationType;
    }
    public withAssociationStatus(associationStatus: string): SearchResourceShareAssociationsReqBody {
        this['association_status'] = associationStatus;
        return this;
    }
    public set associationStatus(associationStatus: string  | undefined) {
        this['association_status'] = associationStatus;
    }
    public get associationStatus(): string | undefined {
        return this['association_status'];
    }
    public withAssociationType(associationType: SearchResourceShareAssociationsReqBodyAssociationTypeEnum | string): SearchResourceShareAssociationsReqBody {
        this['association_type'] = associationType;
        return this;
    }
    public set associationType(associationType: SearchResourceShareAssociationsReqBodyAssociationTypeEnum | string  | undefined) {
        this['association_type'] = associationType;
    }
    public get associationType(): SearchResourceShareAssociationsReqBodyAssociationTypeEnum | string | undefined {
        return this['association_type'];
    }
    public withLimit(limit: number): SearchResourceShareAssociationsReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): SearchResourceShareAssociationsReqBody {
        this['marker'] = marker;
        return this;
    }
    public withPrincipal(principal: string): SearchResourceShareAssociationsReqBody {
        this['principal'] = principal;
        return this;
    }
    public withResourceUrn(resourceUrn: string): SearchResourceShareAssociationsReqBody {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
    public withResourceShareIds(resourceShareIds: Array<string>): SearchResourceShareAssociationsReqBody {
        this['resource_share_ids'] = resourceShareIds;
        return this;
    }
    public set resourceShareIds(resourceShareIds: Array<string>  | undefined) {
        this['resource_share_ids'] = resourceShareIds;
    }
    public get resourceShareIds(): Array<string> | undefined {
        return this['resource_share_ids'];
    }
    public withResourceIds(resourceIds: Array<string>): SearchResourceShareAssociationsReqBody {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchResourceShareAssociationsReqBodyAssociationTypeEnum {
    PRINCIPAL = 'principal',
    RESOURCE = 'resource'
}
