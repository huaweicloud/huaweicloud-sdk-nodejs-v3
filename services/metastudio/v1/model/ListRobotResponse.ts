import { Pages } from './Pages';
import { RobotInfo } from './RobotInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRobotResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<RobotInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListRobotResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRobotResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListRobotResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<RobotInfo>): ListRobotResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRobotResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}