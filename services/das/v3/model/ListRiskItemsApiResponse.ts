import { RiskItemInfo } from './RiskItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRiskItemsApiResponse extends SdkResponse {
    private 'engine_type'?: string;
    public items?: Array<RiskItemInfo>;
    public constructor() { 
        super();
    }
    public withEngineType(engineType: string): ListRiskItemsApiResponse {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withItems(items: Array<RiskItemInfo>): ListRiskItemsApiResponse {
        this['items'] = items;
        return this;
    }
}