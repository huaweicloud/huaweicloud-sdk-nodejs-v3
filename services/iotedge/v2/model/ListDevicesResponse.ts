import { PageInfoDTO } from './PageInfoDTO';
import { QueryDeviceSimplifyDto } from './QueryDeviceSimplifyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevicesResponse extends SdkResponse {
    public devices?: Array<QueryDeviceSimplifyDto>;
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public constructor() { 
        super();
    }
    public withDevices(devices: Array<QueryDeviceSimplifyDto>): ListDevicesResponse {
        this['devices'] = devices;
        return this;
    }
    public withCount(count: number): ListDevicesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListDevicesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
}