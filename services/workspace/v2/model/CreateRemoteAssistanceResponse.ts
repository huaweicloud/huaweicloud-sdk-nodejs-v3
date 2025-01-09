
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRemoteAssistanceResponse extends SdkResponse {
    private 'share_space_id'?: string;
    public status?: string;
    private 'desktop_id'?: string;
    private 'initiator_type'?: string;
    public constructor() { 
        super();
    }
    public withShareSpaceId(shareSpaceId: string): CreateRemoteAssistanceResponse {
        this['share_space_id'] = shareSpaceId;
        return this;
    }
    public set shareSpaceId(shareSpaceId: string  | undefined) {
        this['share_space_id'] = shareSpaceId;
    }
    public get shareSpaceId(): string | undefined {
        return this['share_space_id'];
    }
    public withStatus(status: string): CreateRemoteAssistanceResponse {
        this['status'] = status;
        return this;
    }
    public withDesktopId(desktopId: string): CreateRemoteAssistanceResponse {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withInitiatorType(initiatorType: string): CreateRemoteAssistanceResponse {
        this['initiator_type'] = initiatorType;
        return this;
    }
    public set initiatorType(initiatorType: string  | undefined) {
        this['initiator_type'] = initiatorType;
    }
    public get initiatorType(): string | undefined {
        return this['initiator_type'];
    }
}