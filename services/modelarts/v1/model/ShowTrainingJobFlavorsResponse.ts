import { FlavorResponse } from './FlavorResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobFlavorsResponse extends SdkResponse {
    private 'total_count'?: number;
    public flavors?: Array<FlavorResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowTrainingJobFlavorsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFlavors(flavors: Array<FlavorResponse>): ShowTrainingJobFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}