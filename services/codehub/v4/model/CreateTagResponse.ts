import { CommitDto } from './CommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTagResponse extends SdkResponse {
    public name?: string;
    public message?: string;
    public target?: string;
    public commit?: CommitDto;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateTagResponse {
        this['name'] = name;
        return this;
    }
    public withMessage(message: string): CreateTagResponse {
        this['message'] = message;
        return this;
    }
    public withTarget(target: string): CreateTagResponse {
        this['target'] = target;
        return this;
    }
    public withCommit(commit: CommitDto): CreateTagResponse {
        this['commit'] = commit;
        return this;
    }
}