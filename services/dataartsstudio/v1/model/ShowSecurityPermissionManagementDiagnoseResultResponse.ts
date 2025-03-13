import { HighPermission } from './HighPermission';
import { UnreasonablePermission } from './UnreasonablePermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityPermissionManagementDiagnoseResultResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'check_time'?: number;
    public scanning?: boolean;
    private 'high_permission'?: HighPermission;
    private 'unreasonable_permission'?: UnreasonablePermission;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowSecurityPermissionManagementDiagnoseResultResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withCheckTime(checkTime: number): ShowSecurityPermissionManagementDiagnoseResultResponse {
        this['check_time'] = checkTime;
        return this;
    }
    public set checkTime(checkTime: number  | undefined) {
        this['check_time'] = checkTime;
    }
    public get checkTime(): number | undefined {
        return this['check_time'];
    }
    public withScanning(scanning: boolean): ShowSecurityPermissionManagementDiagnoseResultResponse {
        this['scanning'] = scanning;
        return this;
    }
    public withHighPermission(highPermission: HighPermission): ShowSecurityPermissionManagementDiagnoseResultResponse {
        this['high_permission'] = highPermission;
        return this;
    }
    public set highPermission(highPermission: HighPermission  | undefined) {
        this['high_permission'] = highPermission;
    }
    public get highPermission(): HighPermission | undefined {
        return this['high_permission'];
    }
    public withUnreasonablePermission(unreasonablePermission: UnreasonablePermission): ShowSecurityPermissionManagementDiagnoseResultResponse {
        this['unreasonable_permission'] = unreasonablePermission;
        return this;
    }
    public set unreasonablePermission(unreasonablePermission: UnreasonablePermission  | undefined) {
        this['unreasonable_permission'] = unreasonablePermission;
    }
    public get unreasonablePermission(): UnreasonablePermission | undefined {
        return this['unreasonable_permission'];
    }
}