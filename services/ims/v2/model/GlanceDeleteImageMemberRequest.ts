

export class GlanceDeleteImageMemberRequest {
    private 'image_id': string | undefined;
    private 'member_id': string | undefined;
    public constructor(imageId?: any, memberId?: any) { 
        this['image_id'] = imageId;
        this['member_id'] = memberId;
    }
    public withImageId(imageId: string): GlanceDeleteImageMemberRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withMemberId(memberId: string): GlanceDeleteImageMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId() {
        return this['member_id'];
    }
}