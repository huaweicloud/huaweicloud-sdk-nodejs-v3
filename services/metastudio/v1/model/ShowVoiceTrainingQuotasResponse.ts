import { ResourceAvailableNums } from './ResourceAvailableNums';
import { VoiceTrainingResource } from './VoiceTrainingResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVoiceTrainingQuotasResponse extends SdkResponse {
    public count?: number;
    private 'resource_available_nums'?: ResourceAvailableNums;
    public resources?: Array<VoiceTrainingResource>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowVoiceTrainingQuotasResponse {
        this['count'] = count;
        return this;
    }
    public withResourceAvailableNums(resourceAvailableNums: ResourceAvailableNums): ShowVoiceTrainingQuotasResponse {
        this['resource_available_nums'] = resourceAvailableNums;
        return this;
    }
    public set resourceAvailableNums(resourceAvailableNums: ResourceAvailableNums  | undefined) {
        this['resource_available_nums'] = resourceAvailableNums;
    }
    public get resourceAvailableNums(): ResourceAvailableNums | undefined {
        return this['resource_available_nums'];
    }
    public withResources(resources: Array<VoiceTrainingResource>): ShowVoiceTrainingQuotasResponse {
        this['resources'] = resources;
        return this;
    }
}