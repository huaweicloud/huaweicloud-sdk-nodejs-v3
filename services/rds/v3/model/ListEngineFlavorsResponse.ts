import { EngineFlavorData } from './EngineFlavorData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEngineFlavorsResponse extends SdkResponse {
    private 'optional_flavors'?: Array<EngineFlavorData>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOptionalFlavors(optionalFlavors: Array<EngineFlavorData>): ListEngineFlavorsResponse {
        this['optional_flavors'] = optionalFlavors;
        return this;
    }
    public set optionalFlavors(optionalFlavors: Array<EngineFlavorData>  | undefined) {
        this['optional_flavors'] = optionalFlavors;
    }
    public get optionalFlavors(): Array<EngineFlavorData> | undefined {
        return this['optional_flavors'];
    }
    public withTotalCount(totalCount: number): ListEngineFlavorsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}