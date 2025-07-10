import { BaseError } from './BaseError';
import { DesktopAction } from './DesktopAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopActionsResponse extends SdkResponse {
    private 'desktop_actions'?: Array<DesktopAction>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktopActions(desktopActions: Array<DesktopAction>): ListDesktopActionsResponse {
        this['desktop_actions'] = desktopActions;
        return this;
    }
    public set desktopActions(desktopActions: Array<DesktopAction>  | undefined) {
        this['desktop_actions'] = desktopActions;
    }
    public get desktopActions(): Array<DesktopAction> | undefined {
        return this['desktop_actions'];
    }
    public withTotalCount(totalCount: number): ListDesktopActionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}