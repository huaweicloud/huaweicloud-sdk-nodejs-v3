
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRegexTestResponse extends SdkResponse {
    public success?: boolean;
    public message?: string;
    public matches?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): CreateRegexTestResponse {
        this['success'] = success;
        return this;
    }
    public withMessage(message: string): CreateRegexTestResponse {
        this['message'] = message;
        return this;
    }
    public withMatches(matches: Array<string>): CreateRegexTestResponse {
        this['matches'] = matches;
        return this;
    }
}