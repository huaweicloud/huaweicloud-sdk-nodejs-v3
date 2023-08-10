
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFsDirResponse extends SdkResponse {
    public path?: string;
    public mode?: number;
    public uid?: number;
    public gid?: number;
    public constructor() { 
        super();
    }
    public withPath(path: string): ShowFsDirResponse {
        this['path'] = path;
        return this;
    }
    public withMode(mode: number): ShowFsDirResponse {
        this['mode'] = mode;
        return this;
    }
    public withUid(uid: number): ShowFsDirResponse {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): ShowFsDirResponse {
        this['gid'] = gid;
        return this;
    }
}