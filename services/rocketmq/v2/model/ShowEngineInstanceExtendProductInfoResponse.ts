import { RocketMQExtendProductInfoEntity } from './RocketMQExtendProductInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineInstanceExtendProductInfoResponse extends SdkResponse {
    public engine?: string;
    public versions?: Array<string>;
    public products?: Array<RocketMQExtendProductInfoEntity>;
    public constructor() { 
        super();
    }
    public withEngine(engine: string): ShowEngineInstanceExtendProductInfoResponse {
        this['engine'] = engine;
        return this;
    }
    public withVersions(versions: Array<string>): ShowEngineInstanceExtendProductInfoResponse {
        this['versions'] = versions;
        return this;
    }
    public withProducts(products: Array<RocketMQExtendProductInfoEntity>): ShowEngineInstanceExtendProductInfoResponse {
        this['products'] = products;
        return this;
    }
}