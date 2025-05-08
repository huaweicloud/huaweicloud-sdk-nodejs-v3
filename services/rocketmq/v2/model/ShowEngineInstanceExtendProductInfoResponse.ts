import { RocketMQExtendProductInfoEntity } from './RocketMQExtendProductInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineInstanceExtendProductInfoResponse extends SdkResponse {
    public total?: number;
    private 'next_offset'?: number;
    private 'previous_offset'?: number;
    public engine?: string;
    public versions?: Array<string>;
    public products?: Array<RocketMQExtendProductInfoEntity>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowEngineInstanceExtendProductInfoResponse {
        this['total'] = total;
        return this;
    }
    public withNextOffset(nextOffset: number): ShowEngineInstanceExtendProductInfoResponse {
        this['next_offset'] = nextOffset;
        return this;
    }
    public set nextOffset(nextOffset: number  | undefined) {
        this['next_offset'] = nextOffset;
    }
    public get nextOffset(): number | undefined {
        return this['next_offset'];
    }
    public withPreviousOffset(previousOffset: number): ShowEngineInstanceExtendProductInfoResponse {
        this['previous_offset'] = previousOffset;
        return this;
    }
    public set previousOffset(previousOffset: number  | undefined) {
        this['previous_offset'] = previousOffset;
    }
    public get previousOffset(): number | undefined {
        return this['previous_offset'];
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