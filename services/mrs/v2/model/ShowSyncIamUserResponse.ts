
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSyncIamUserResponse extends SdkResponse {
    private 'user_names'?: Array<string>;
    private 'group_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withUserNames(userNames: Array<string>): ShowSyncIamUserResponse {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withGroupNames(groupNames: Array<string>): ShowSyncIamUserResponse {
        this['group_names'] = groupNames;
        return this;
    }
    public set groupNames(groupNames: Array<string>  | undefined) {
        this['group_names'] = groupNames;
    }
    public get groupNames(): Array<string> | undefined {
        return this['group_names'];
    }
}