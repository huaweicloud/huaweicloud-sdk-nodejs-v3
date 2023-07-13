
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogDumpObsResponse extends SdkResponse {
    private 'log_dump_obs_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLogDumpObsId(logDumpObsId: string): CreateLogDumpObsResponse {
        this['log_dump_obs_id'] = logDumpObsId;
        return this;
    }
    public set logDumpObsId(logDumpObsId: string | undefined) {
        this['log_dump_obs_id'] = logDumpObsId;
    }
    public get logDumpObsId() {
        return this['log_dump_obs_id'];
    }
}