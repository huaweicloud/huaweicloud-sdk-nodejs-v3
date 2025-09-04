import { PageInfoDTO } from './PageInfoDTO';
import { QueryDcDeviceRespDTO } from './QueryDcDeviceRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListDcDevicesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public devices?: Array<QueryDcDeviceRespDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListDcDevicesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListDcDevicesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withDevices(devices: Array<QueryDcDeviceRespDTO>): BatchListDcDevicesResponse {
        this['devices'] = devices;
        return this;
    }
}