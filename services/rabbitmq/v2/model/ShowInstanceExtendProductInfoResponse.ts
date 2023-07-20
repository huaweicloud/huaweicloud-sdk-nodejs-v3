import { RabbitMQExtendProductInfoEntity } from './RabbitMQExtendProductInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceExtendProductInfoResponse extends SdkResponse {
    public engine?: string;
    public versions?: Array<string>;
    public products?: Array<RabbitMQExtendProductInfoEntity>;
    public constructor() { 
        super();
    }
    public withEngine(engine: string): ShowInstanceExtendProductInfoResponse {
        this['engine'] = engine;
        return this;
    }
    public withVersions(versions: Array<string>): ShowInstanceExtendProductInfoResponse {
        this['versions'] = versions;
        return this;
    }
    public withProducts(products: Array<RabbitMQExtendProductInfoEntity>): ShowInstanceExtendProductInfoResponse {
        this['products'] = products;
        return this;
    }
}