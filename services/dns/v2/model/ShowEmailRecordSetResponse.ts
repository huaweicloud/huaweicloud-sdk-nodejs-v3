import { ListRecordSets } from './ListRecordSets';
import { Metadata } from './Metadata';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEmailRecordSetResponse extends SdkResponse {
    public links?: PageLink;
    public recordsets?: Array<ListRecordSets>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinks(links: PageLink): ShowEmailRecordSetResponse {
        this['links'] = links;
        return this;
    }
    public withRecordsets(recordsets: Array<ListRecordSets>): ShowEmailRecordSetResponse {
        this['recordsets'] = recordsets;
        return this;
    }
    public withMetadata(metadata: Metadata): ShowEmailRecordSetResponse {
        this['metadata'] = metadata;
        return this;
    }
}