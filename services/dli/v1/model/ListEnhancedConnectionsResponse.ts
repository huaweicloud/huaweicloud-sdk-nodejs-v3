import { EnhancedConnection } from './EnhancedConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnhancedConnectionsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public connections?: Array<EnhancedConnection>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListEnhancedConnectionsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListEnhancedConnectionsResponse {
        this['message'] = message;
        return this;
    }
    public withConnections(connections: Array<EnhancedConnection>): ListEnhancedConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withCount(count: number): ListEnhancedConnectionsResponse {
        this['count'] = count;
        return this;
    }
}