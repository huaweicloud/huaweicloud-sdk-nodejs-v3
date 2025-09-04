import { RouterDetailRespDTO } from './RouterDetailRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRoutesResponse extends SdkResponse {
    public routes?: Array<RouterDetailRespDTO>;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withRoutes(routes: Array<RouterDetailRespDTO>): ListRoutesResponse {
        this['routes'] = routes;
        return this;
    }
    public withUpdateTime(updateTime: string): ListRoutesResponse {
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