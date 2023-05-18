
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveAgentPathResponse extends SdkResponse {
    public removed?: Array<string>;
    private 'not_existed'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withRemoved(removed: Array<string>): RemoveAgentPathResponse {
        this['removed'] = removed;
        return this;
    }
    public withNotExisted(notExisted: Array<string>): RemoveAgentPathResponse {
        this['not_existed'] = notExisted;
        return this;
    }
    public set notExisted(notExisted: Array<string> | undefined) {
        this['not_existed'] = notExisted;
    }
    public get notExisted() {
        return this['not_existed'];
    }
}