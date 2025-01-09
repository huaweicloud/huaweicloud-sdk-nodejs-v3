import { AttachInstancesDesktopInfo } from './AttachInstancesDesktopInfo';
import { DesktopDimensionAttachInfo } from './DesktopDimensionAttachInfo';
import { UserDimensionAttachInfo } from './UserDimensionAttachInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAssociateInstancesResponse extends SdkResponse {
    private 'assign_dimension'?: string;
    public desktop?: Array<DesktopDimensionAttachInfo>;
    public user?: Array<UserDimensionAttachInfo>;
    private 'desktops_attach_infos'?: Array<AttachInstancesDesktopInfo>;
    public constructor() { 
        super();
    }
    public withAssignDimension(assignDimension: string): BatchAssociateInstancesResponse {
        this['assign_dimension'] = assignDimension;
        return this;
    }
    public set assignDimension(assignDimension: string  | undefined) {
        this['assign_dimension'] = assignDimension;
    }
    public get assignDimension(): string | undefined {
        return this['assign_dimension'];
    }
    public withDesktop(desktop: Array<DesktopDimensionAttachInfo>): BatchAssociateInstancesResponse {
        this['desktop'] = desktop;
        return this;
    }
    public withUser(user: Array<UserDimensionAttachInfo>): BatchAssociateInstancesResponse {
        this['user'] = user;
        return this;
    }
    public withDesktopsAttachInfos(desktopsAttachInfos: Array<AttachInstancesDesktopInfo>): BatchAssociateInstancesResponse {
        this['desktops_attach_infos'] = desktopsAttachInfos;
        return this;
    }
    public set desktopsAttachInfos(desktopsAttachInfos: Array<AttachInstancesDesktopInfo>  | undefined) {
        this['desktops_attach_infos'] = desktopsAttachInfos;
    }
    public get desktopsAttachInfos(): Array<AttachInstancesDesktopInfo> | undefined {
        return this['desktops_attach_infos'];
    }
}