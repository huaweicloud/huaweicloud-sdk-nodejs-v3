import { Area } from './Area';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAreasResponse extends SdkResponse {
    private 'request_id'?: string;
    public areas?: Array<Area>;
    public constructor(requestId?: string, areas?: Array<Area>) { 
        super();
        this['request_id'] = requestId;
        this['areas'] = areas;
    }
    public withRequestId(requestId: string): ListAreasResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAreas(areas: Array<Area>): ListAreasResponse {
        this['areas'] = areas;
        return this;
    }
}