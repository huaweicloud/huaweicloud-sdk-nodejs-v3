import { PublisherVO } from './PublisherVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublisherResponse extends SdkResponse {
    private 'publisher_detail_map'?: { [key: string]: PublisherVO; };
    public constructor() { 
        super();
    }
    public withPublisherDetailMap(publisherDetailMap: { [key: string]: PublisherVO; }): ShowPublisherResponse {
        this['publisher_detail_map'] = publisherDetailMap;
        return this;
    }
    public set publisherDetailMap(publisherDetailMap: { [key: string]: PublisherVO; }  | undefined) {
        this['publisher_detail_map'] = publisherDetailMap;
    }
    public get publisherDetailMap(): { [key: string]: PublisherVO; } | undefined {
        return this['publisher_detail_map'];
    }
}