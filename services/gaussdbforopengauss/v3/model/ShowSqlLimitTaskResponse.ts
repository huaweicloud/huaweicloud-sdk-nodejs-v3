
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitTaskResponse extends SdkResponse {
    private 'limit_count'?: number;
    public constructor() { 
        super();
    }
    public withLimitCount(limitCount: number): ShowSqlLimitTaskResponse {
        this['limit_count'] = limitCount;
        return this;
    }
    public set limitCount(limitCount: number  | undefined) {
        this['limit_count'] = limitCount;
    }
    public get limitCount(): number | undefined {
        return this['limit_count'];
    }
}