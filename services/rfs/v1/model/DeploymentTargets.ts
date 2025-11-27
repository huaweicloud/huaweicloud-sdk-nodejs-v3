import { DomainIdFilterTypePrimitiveTypeHolder } from './DomainIdFilterTypePrimitiveTypeHolder';
import { DomainIdsPrimitiveTypeHolder } from './DomainIdsPrimitiveTypeHolder';
import { DomainIdsUriPrimitiveTypeHolder } from './DomainIdsUriPrimitiveTypeHolder';
import { OrganizationalUnitIdsPrimitiveTypeHolder } from './OrganizationalUnitIdsPrimitiveTypeHolder';
import { RegionsPrimitiveTypeHolder } from './RegionsPrimitiveTypeHolder';


export class DeploymentTargets {
    public regions?: Array<string>;
    private 'domain_ids'?: Array<string>;
    private 'domain_ids_uri'?: string;
    private 'organizational_unit_ids'?: Array<string>;
    private 'domain_id_filter_type'?: DeploymentTargetsDomainIdFilterTypeEnum | string;
    public constructor(regions?: Array<string>) { 
        this['regions'] = regions;
    }
    public withRegions(regions: Array<string>): DeploymentTargets {
        this['regions'] = regions;
        return this;
    }
    public withDomainIds(domainIds: Array<string>): DeploymentTargets {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withDomainIdsUri(domainIdsUri: string): DeploymentTargets {
        this['domain_ids_uri'] = domainIdsUri;
        return this;
    }
    public set domainIdsUri(domainIdsUri: string  | undefined) {
        this['domain_ids_uri'] = domainIdsUri;
    }
    public get domainIdsUri(): string | undefined {
        return this['domain_ids_uri'];
    }
    public withOrganizationalUnitIds(organizationalUnitIds: Array<string>): DeploymentTargets {
        this['organizational_unit_ids'] = organizationalUnitIds;
        return this;
    }
    public set organizationalUnitIds(organizationalUnitIds: Array<string>  | undefined) {
        this['organizational_unit_ids'] = organizationalUnitIds;
    }
    public get organizationalUnitIds(): Array<string> | undefined {
        return this['organizational_unit_ids'];
    }
    public withDomainIdFilterType(domainIdFilterType: DeploymentTargetsDomainIdFilterTypeEnum | string): DeploymentTargets {
        this['domain_id_filter_type'] = domainIdFilterType;
        return this;
    }
    public set domainIdFilterType(domainIdFilterType: DeploymentTargetsDomainIdFilterTypeEnum | string  | undefined) {
        this['domain_id_filter_type'] = domainIdFilterType;
    }
    public get domainIdFilterType(): DeploymentTargetsDomainIdFilterTypeEnum | string | undefined {
        return this['domain_id_filter_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentTargetsDomainIdFilterTypeEnum {
    INTERSECTION = 'INTERSECTION',
    DIFFERENCE = 'DIFFERENCE',
    UNION = 'UNION',
    NONE = 'NONE'
}
