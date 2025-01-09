import { BaseError } from './BaseError';
import { DesktopAction } from './DesktopAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopActionsResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'desktop_actions'?: Array<DesktopAction>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ListDesktopActionsResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListDesktopActionsResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
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