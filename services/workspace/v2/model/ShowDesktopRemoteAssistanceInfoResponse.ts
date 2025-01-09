
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopRemoteAssistanceInfoResponse extends SdkResponse {
    private 'share_space_id'?: string;
    private 'invitation_code'?: string;
    private 'share_space_name'?: string;
    private 'share_space_passwd'?: string;
    private 'private_share_link'?: string;
    private 'internet_share_link'?: string;
    private 'create_time'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    public constructor() { 
        super();
    }
    public withShareSpaceId(shareSpaceId: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['share_space_id'] = shareSpaceId;
        return this;
    }
    public set shareSpaceId(shareSpaceId: string  | undefined) {
        this['share_space_id'] = shareSpaceId;
    }
    public get shareSpaceId(): string | undefined {
        return this['share_space_id'];
    }
    public withInvitationCode(invitationCode: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['invitation_code'] = invitationCode;
        return this;
    }
    public set invitationCode(invitationCode: string  | undefined) {
        this['invitation_code'] = invitationCode;
    }
    public get invitationCode(): string | undefined {
        return this['invitation_code'];
    }
    public withShareSpaceName(shareSpaceName: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['share_space_name'] = shareSpaceName;
        return this;
    }
    public set shareSpaceName(shareSpaceName: string  | undefined) {
        this['share_space_name'] = shareSpaceName;
    }
    public get shareSpaceName(): string | undefined {
        return this['share_space_name'];
    }
    public withShareSpacePasswd(shareSpacePasswd: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['share_space_passwd'] = shareSpacePasswd;
        return this;
    }
    public set shareSpacePasswd(shareSpacePasswd: string  | undefined) {
        this['share_space_passwd'] = shareSpacePasswd;
    }
    public get shareSpacePasswd(): string | undefined {
        return this['share_space_passwd'];
    }
    public withPrivateShareLink(privateShareLink: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['private_share_link'] = privateShareLink;
        return this;
    }
    public set privateShareLink(privateShareLink: string  | undefined) {
        this['private_share_link'] = privateShareLink;
    }
    public get privateShareLink(): string | undefined {
        return this['private_share_link'];
    }
    public withInternetShareLink(internetShareLink: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['internet_share_link'] = internetShareLink;
        return this;
    }
    public set internetShareLink(internetShareLink: string  | undefined) {
        this['internet_share_link'] = internetShareLink;
    }
    public get internetShareLink(): string | undefined {
        return this['internet_share_link'];
    }
    public withCreateTime(createTime: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStatus(status: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): ShowDesktopRemoteAssistanceInfoResponse {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}