import { CommitDto } from './CommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagResponse extends SdkResponse {
    public name?: string;
    public message?: string;
    public target?: string;
    public commit?: CommitDto;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowTagResponse {
        this['name'] = name;
        return this;
    }
    public withMessage(message: string): ShowTagResponse {
        this['message'] = message;
        return this;
    }
    public withTarget(target: string): ShowTagResponse {
        this['target'] = target;
        return this;
    }
    public withCommit(commit: CommitDto): ShowTagResponse {
        this['commit'] = commit;
        return this;
    }
    public withXTotal(xTotal: string): ShowTagResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}