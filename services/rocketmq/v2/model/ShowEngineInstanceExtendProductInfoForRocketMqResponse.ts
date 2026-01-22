import { RocketMQExtendProductInfoEntity } from './RocketMQExtendProductInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineInstanceExtendProductInfoForRocketMqResponse extends SdkResponse {
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public engine?: string;
    public versions?: Array<string>;
    public products?: Array<RocketMQExtendProductInfoEntity>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowEngineInstanceExtendProductInfoForRocketMqResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ShowEngineInstanceExtendProductInfoForRocketMqResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowEngineInstanceExtendProductInfoForRocketMqResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
    }
    public withEngine(engine: string): ShowEngineInstanceExtendProductInfoForRocketMqResponse {
        this['engine'] = engine;
        return this;
    }
    public withVersions(versions: Array<string>): ShowEngineInstanceExtendProductInfoForRocketMqResponse {
        this['versions'] = versions;
        return this;
    }
    public withProducts(products: Array<RocketMQExtendProductInfoEntity>): ShowEngineInstanceExtendProductInfoForRocketMqResponse {
        this['products'] = products;
        return this;
    }
}