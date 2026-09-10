import { ListCloudPhoneServersModelOfferingsResponseBodyPageInfo } from './ListCloudPhoneServersModelOfferingsResponseBodyPageInfo';
import { ListShareAppsSnapshotResponseBodyShareApps } from './ListShareAppsSnapshotResponseBodyShareApps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShareAppsSnapshotResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'collect_time'?: string;
    private 'share_apps'?: Array<ListShareAppsSnapshotResponseBodyShareApps>;
    private 'page_info'?: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListShareAppsSnapshotResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCollectTime(collectTime: string): ListShareAppsSnapshotResponse {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: string  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): string | undefined {
        return this['collect_time'];
    }
    public withShareApps(shareApps: Array<ListShareAppsSnapshotResponseBodyShareApps>): ListShareAppsSnapshotResponse {
        this['share_apps'] = shareApps;
        return this;
    }
    public set shareApps(shareApps: Array<ListShareAppsSnapshotResponseBodyShareApps>  | undefined) {
        this['share_apps'] = shareApps;
    }
    public get shareApps(): Array<ListShareAppsSnapshotResponseBodyShareApps> | undefined {
        return this['share_apps'];
    }
    public withPageInfo(pageInfo: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo): ListShareAppsSnapshotResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListCloudPhoneServersModelOfferingsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListCloudPhoneServersModelOfferingsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
}