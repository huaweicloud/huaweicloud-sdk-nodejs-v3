import { Catalog } from './Catalog';
import { LinksSelf } from './LinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowCatalogResponse extends SdkResponse {
    public catalog?: Array<Catalog>;
    public links?: LinksSelf;
    public constructor() { 
        super();
    }
    public withCatalog(catalog: Array<Catalog>): KeystoneShowCatalogResponse {
        this['catalog'] = catalog;
        return this;
    }
    public withLinks(links: LinksSelf): KeystoneShowCatalogResponse {
        this['links'] = links;
        return this;
    }
}