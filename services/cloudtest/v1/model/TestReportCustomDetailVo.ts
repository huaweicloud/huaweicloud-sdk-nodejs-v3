import { AttachmentVo } from './AttachmentVo';


export class TestReportCustomDetailVo {
    public uri?: string;
    public name?: string;
    public display?: number;
    public description?: string;
    public attachments?: Array<AttachmentVo>;
    public creator?: string;
    public updator?: string;
    private 'test_report_uri'?: string;
    private 'create_time'?: Date;
    private 'create_timestamp'?: number;
    private 'creator_name'?: string;
    private 'update_time'?: Date;
    private 'update_timestamp'?: number;
    private 'updator_name'?: string;
    public constructor() { 
    }
    public withUri(uri: string): TestReportCustomDetailVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TestReportCustomDetailVo {
        this['name'] = name;
        return this;
    }
    public withDisplay(display: number): TestReportCustomDetailVo {
        this['display'] = display;
        return this;
    }
    public withDescription(description: string): TestReportCustomDetailVo {
        this['description'] = description;
        return this;
    }
    public withAttachments(attachments: Array<AttachmentVo>): TestReportCustomDetailVo {
        this['attachments'] = attachments;
        return this;
    }
    public withCreator(creator: string): TestReportCustomDetailVo {
        this['creator'] = creator;
        return this;
    }
    public withUpdator(updator: string): TestReportCustomDetailVo {
        this['updator'] = updator;
        return this;
    }
    public withTestReportUri(testReportUri: string): TestReportCustomDetailVo {
        this['test_report_uri'] = testReportUri;
        return this;
    }
    public set testReportUri(testReportUri: string  | undefined) {
        this['test_report_uri'] = testReportUri;
    }
    public get testReportUri(): string | undefined {
        return this['test_report_uri'];
    }
    public withCreateTime(createTime: Date): TestReportCustomDetailVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateTimestamp(createTimestamp: number): TestReportCustomDetailVo {
        this['create_timestamp'] = createTimestamp;
        return this;
    }
    public set createTimestamp(createTimestamp: number  | undefined) {
        this['create_timestamp'] = createTimestamp;
    }
    public get createTimestamp(): number | undefined {
        return this['create_timestamp'];
    }
    public withCreatorName(creatorName: string): TestReportCustomDetailVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: Date): TestReportCustomDetailVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimestamp(updateTimestamp: number): TestReportCustomDetailVo {
        this['update_timestamp'] = updateTimestamp;
        return this;
    }
    public set updateTimestamp(updateTimestamp: number  | undefined) {
        this['update_timestamp'] = updateTimestamp;
    }
    public get updateTimestamp(): number | undefined {
        return this['update_timestamp'];
    }
    public withUpdatorName(updatorName: string): TestReportCustomDetailVo {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string  | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName(): string | undefined {
        return this['updator_name'];
    }
}