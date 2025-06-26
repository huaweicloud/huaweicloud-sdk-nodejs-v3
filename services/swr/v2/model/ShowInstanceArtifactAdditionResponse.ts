import { BuildHistory } from './BuildHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceArtifactAdditionResponse extends SdkResponse {
    private 'build_histories'?: Array<BuildHistory>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withBuildHistories(buildHistories: Array<BuildHistory>): ShowInstanceArtifactAdditionResponse {
        this['build_histories'] = buildHistories;
        return this;
    }
    public set buildHistories(buildHistories: Array<BuildHistory>  | undefined) {
        this['build_histories'] = buildHistories;
    }
    public get buildHistories(): Array<BuildHistory> | undefined {
        return this['build_histories'];
    }
    public withTotal(total: number): ShowInstanceArtifactAdditionResponse {
        this['total'] = total;
        return this;
    }
}