import { ChapterConfig } from './ChapterConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthReportTemplateResponse extends SdkResponse {
    private 'template_id'?: number;
    private 'template_name'?: string;
    public description?: string;
    public system?: boolean;
    private 'chapters_config'?: { [key: string]: ChapterConfig; };
    private 'create_at'?: number;
    private 'update_at'?: number;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: number): ShowHealthReportTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowHealthReportTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): ShowHealthReportTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withSystem(system: boolean): ShowHealthReportTemplateResponse {
        this['system'] = system;
        return this;
    }
    public withChaptersConfig(chaptersConfig: { [key: string]: ChapterConfig; }): ShowHealthReportTemplateResponse {
        this['chapters_config'] = chaptersConfig;
        return this;
    }
    public set chaptersConfig(chaptersConfig: { [key: string]: ChapterConfig; }  | undefined) {
        this['chapters_config'] = chaptersConfig;
    }
    public get chaptersConfig(): { [key: string]: ChapterConfig; } | undefined {
        return this['chapters_config'];
    }
    public withCreateAt(createAt: number): ShowHealthReportTemplateResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): ShowHealthReportTemplateResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}