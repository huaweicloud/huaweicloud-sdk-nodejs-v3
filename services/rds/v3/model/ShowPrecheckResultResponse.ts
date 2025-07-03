import { DBUpgradePrecheck } from './DBUpgradePrecheck';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrecheckResultResponse extends SdkResponse {
    private 'result_code'?: number;
    public status?: string;
    private 'updated_at'?: string;
    public display?: boolean;
    private 'instance_status_check_list'?: Array<string>;
    private 'db_upgrade_precheck'?: DBUpgradePrecheck;
    private 'download_link'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withResultCode(resultCode: number): ShowPrecheckResultResponse {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: number  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): number | undefined {
        return this['result_code'];
    }
    public withStatus(status: string): ShowPrecheckResultResponse {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): ShowPrecheckResultResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDisplay(display: boolean): ShowPrecheckResultResponse {
        this['display'] = display;
        return this;
    }
    public withInstanceStatusCheckList(instanceStatusCheckList: Array<string>): ShowPrecheckResultResponse {
        this['instance_status_check_list'] = instanceStatusCheckList;
        return this;
    }
    public set instanceStatusCheckList(instanceStatusCheckList: Array<string>  | undefined) {
        this['instance_status_check_list'] = instanceStatusCheckList;
    }
    public get instanceStatusCheckList(): Array<string> | undefined {
        return this['instance_status_check_list'];
    }
    public withDbUpgradePrecheck(dbUpgradePrecheck: DBUpgradePrecheck): ShowPrecheckResultResponse {
        this['db_upgrade_precheck'] = dbUpgradePrecheck;
        return this;
    }
    public set dbUpgradePrecheck(dbUpgradePrecheck: DBUpgradePrecheck  | undefined) {
        this['db_upgrade_precheck'] = dbUpgradePrecheck;
    }
    public get dbUpgradePrecheck(): DBUpgradePrecheck | undefined {
        return this['db_upgrade_precheck'];
    }
    public withDownloadLink(downloadLink: string): ShowPrecheckResultResponse {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withXRequestId(xRequestId: string): ShowPrecheckResultResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}