
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerGroupRestrictResponse extends SdkResponse {
    private 'max_session'?: number;
    private 'max_group_count'?: number;
    public constructor() { 
        super();
    }
    public withMaxSession(maxSession: number): ShowServerGroupRestrictResponse {
        this['max_session'] = maxSession;
        return this;
    }
    public set maxSession(maxSession: number  | undefined) {
        this['max_session'] = maxSession;
    }
    public get maxSession(): number | undefined {
        return this['max_session'];
    }
    public withMaxGroupCount(maxGroupCount: number): ShowServerGroupRestrictResponse {
        this['max_group_count'] = maxGroupCount;
        return this;
    }
    public set maxGroupCount(maxGroupCount: number  | undefined) {
        this['max_group_count'] = maxGroupCount;
    }
    public get maxGroupCount(): number | undefined {
        return this['max_group_count'];
    }
}