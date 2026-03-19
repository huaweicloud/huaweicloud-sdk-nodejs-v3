

export class NoticeRequestBody {
    private 'resource_id'?: string;
    private 'notice_type'?: Array<string>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): NoticeRequestBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withNoticeType(noticeType: Array<string>): NoticeRequestBody {
        this['notice_type'] = noticeType;
        return this;
    }
    public set noticeType(noticeType: Array<string>  | undefined) {
        this['notice_type'] = noticeType;
    }
    public get noticeType(): Array<string> | undefined {
        return this['notice_type'];
    }
}