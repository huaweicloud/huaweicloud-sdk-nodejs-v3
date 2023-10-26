import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLinkResponse extends SdkResponse {
    public links?: Array<Links>;
    private 'fromTo-unMapping'?: string;
    private 'batchFromTo-mapping'?: string;
    public constructor() { 
        super();
    }
    public withLinks(links: Array<Links>): ShowLinkResponse {
        this['links'] = links;
        return this;
    }
    public withFromToUnMapping(fromToUnMapping: string): ShowLinkResponse {
        this['fromTo-unMapping'] = fromToUnMapping;
        return this;
    }
    public set fromToUnMapping(fromToUnMapping: string  | undefined) {
        this['fromTo-unMapping'] = fromToUnMapping;
    }
    public get fromToUnMapping(): string | undefined {
        return this['fromTo-unMapping'];
    }
    public withBatchFromToMapping(batchFromToMapping: string): ShowLinkResponse {
        this['batchFromTo-mapping'] = batchFromToMapping;
        return this;
    }
    public set batchFromToMapping(batchFromToMapping: string  | undefined) {
        this['batchFromTo-mapping'] = batchFromToMapping;
    }
    public get batchFromToMapping(): string | undefined {
        return this['batchFromTo-mapping'];
    }
}