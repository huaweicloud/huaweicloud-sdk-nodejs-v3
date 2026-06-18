
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebuildRepositoryNavigationResponse extends SdkResponse {
    public result?: string;
    public message?: string;
    public duration?: string;
    public size?: number;
    public constructor() { 
        super();
    }
    public withResult(result: string): RebuildRepositoryNavigationResponse {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): RebuildRepositoryNavigationResponse {
        this['message'] = message;
        return this;
    }
    public withDuration(duration: string): RebuildRepositoryNavigationResponse {
        this['duration'] = duration;
        return this;
    }
    public withSize(size: number): RebuildRepositoryNavigationResponse {
        this['size'] = size;
        return this;
    }
}