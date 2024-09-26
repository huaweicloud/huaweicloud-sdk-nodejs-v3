

export class AttachmentInstanceSiteCode {
    private 'attachment_instance_site_code'?: string;
    public constructor(attachmentInstanceSiteCode?: string) { 
        this['attachment_instance_site_code'] = attachmentInstanceSiteCode;
    }
    public withAttachmentInstanceSiteCode(attachmentInstanceSiteCode: string): AttachmentInstanceSiteCode {
        this['attachment_instance_site_code'] = attachmentInstanceSiteCode;
        return this;
    }
    public set attachmentInstanceSiteCode(attachmentInstanceSiteCode: string  | undefined) {
        this['attachment_instance_site_code'] = attachmentInstanceSiteCode;
    }
    public get attachmentInstanceSiteCode(): string | undefined {
        return this['attachment_instance_site_code'];
    }
}