import { RouterRespDTO } from './RouterRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRoutesResponse extends SdkResponse {
    public routes?: Array<RouterRespDTO>;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withRoutes(routes: Array<RouterRespDTO>): UpdateRoutesResponse {
        this['routes'] = routes;
        return this;
    }
    public withUpdateTime(updateTime: string): UpdateRoutesResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}