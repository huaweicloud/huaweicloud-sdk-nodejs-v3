
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceShowImageMemberResponse extends SdkResponse {
    public status?: string;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'image_id'?: string | undefined;
    private 'member_id'?: string | undefined;
    public schema?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): GlanceShowImageMemberResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): GlanceShowImageMemberResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GlanceShowImageMemberResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withImageId(imageId: string): GlanceShowImageMemberResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withMemberId(memberId: string): GlanceShowImageMemberResponse {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId() {
        return this['member_id'];
    }
    public withSchema(schema: string): GlanceShowImageMemberResponse {
        this['schema'] = schema;
        return this;
    }
}