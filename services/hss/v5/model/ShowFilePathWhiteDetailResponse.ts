
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFilePathWhiteDetailResponse extends SdkResponse {
    private 'default_path'?: Array<string>;
    private 'customized_path'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDefaultPath(defaultPath: Array<string>): ShowFilePathWhiteDetailResponse {
        this['default_path'] = defaultPath;
        return this;
    }
    public set defaultPath(defaultPath: Array<string>  | undefined) {
        this['default_path'] = defaultPath;
    }
    public get defaultPath(): Array<string> | undefined {
        return this['default_path'];
    }
    public withCustomizedPath(customizedPath: Array<string>): ShowFilePathWhiteDetailResponse {
        this['customized_path'] = customizedPath;
        return this;
    }
    public set customizedPath(customizedPath: Array<string>  | undefined) {
        this['customized_path'] = customizedPath;
    }
    public get customizedPath(): Array<string> | undefined {
        return this['customized_path'];
    }
}