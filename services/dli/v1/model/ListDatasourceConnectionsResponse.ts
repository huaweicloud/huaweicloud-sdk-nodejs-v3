import { DatasourceConnection } from './DatasourceConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatasourceConnectionsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public connections?: Array<DatasourceConnection>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListDatasourceConnectionsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListDatasourceConnectionsResponse {
        this['message'] = message;
        return this;
    }
    public withConnections(connections: Array<DatasourceConnection>): ListDatasourceConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withCount(count: number): ListDatasourceConnectionsResponse {
        this['count'] = count;
        return this;
    }
}