import { ExtendProductInfoEntity } from './ExtendProductInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaInstanceExtendProductInfoResponse extends SdkResponse {
    public engine?: string;
    public versions?: Array<string>;
    public products?: Array<ExtendProductInfoEntity>;
    public constructor() { 
        super();
    }
    public withEngine(engine: string): ShowKafkaInstanceExtendProductInfoResponse {
        this['engine'] = engine;
        return this;
    }
    public withVersions(versions: Array<string>): ShowKafkaInstanceExtendProductInfoResponse {
        this['versions'] = versions;
        return this;
    }
    public withProducts(products: Array<ExtendProductInfoEntity>): ShowKafkaInstanceExtendProductInfoResponse {
        this['products'] = products;
        return this;
    }
}