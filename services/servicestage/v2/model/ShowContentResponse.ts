
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowContentResponse extends SdkResponse {
    public path?: string;
    public sha?: string;
    public encoding?: ShowContentResponseEncodingEnum | string;
    public content?: string;
    public constructor() { 
        super();
    }
    public withPath(path: string): ShowContentResponse {
        this['path'] = path;
        return this;
    }
    public withSha(sha: string): ShowContentResponse {
        this['sha'] = sha;
        return this;
    }
    public withEncoding(encoding: ShowContentResponseEncodingEnum | string): ShowContentResponse {
        this['encoding'] = encoding;
        return this;
    }
    public withContent(content: string): ShowContentResponse {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowContentResponseEncodingEnum {
    BASE64 = 'base64',
    TEXT_PLAIN = 'text/plain'
}
