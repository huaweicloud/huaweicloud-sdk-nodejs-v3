import { Shards } from './Shards';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowObsUrlOfTrainingJobLogsResponse extends SdkResponse {
    private 'obs_url'?: string;
    public shards?: Shards;
    public constructor() { 
        super();
    }
    public withObsUrl(obsUrl: string): ShowObsUrlOfTrainingJobLogsResponse {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
    public withShards(shards: Shards): ShowObsUrlOfTrainingJobLogsResponse {
        this['shards'] = shards;
        return this;
    }
}