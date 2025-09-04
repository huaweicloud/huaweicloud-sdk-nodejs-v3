import { AttachmentInfo } from './AttachmentInfo';


export class TestReportCustomDetailInfo {
    public name?: string;
    public description?: string;
    public attachments?: Array<AttachmentInfo>;
    public constructor() { 
    }
    public withName(name: string): TestReportCustomDetailInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TestReportCustomDetailInfo {
        this['description'] = description;
        return this;
    }
    public withAttachments(attachments: Array<AttachmentInfo>): TestReportCustomDetailInfo {
        this['attachments'] = attachments;
        return this;
    }
}