import { ShowStructTemplateRule } from './ShowStructTemplateRule';
import { ShowStructTemplateclusterInfo } from './ShowStructTemplateclusterInfo';
import { StructFieldInfoReturn } from './StructFieldInfoReturn';
import { TagFieldsInfo } from './TagFieldsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStructTemplateResponse extends SdkResponse {
    public demoFields?: Array<StructFieldInfoReturn>;
    public tagFields?: Array<TagFieldsInfo>;
    public demoLog?: string;
    public demoLabel?: string;
    public id?: string;
    public logGroupId?: string;
    public rule?: ShowStructTemplateRule;
    private 'cluster_info'?: ShowStructTemplateclusterInfo;
    public logStreamId?: string;
    public projectId?: string;
    public templateName?: string;
    public regex?: string;
    public constructor() { 
        super();
    }
    public withDemoFields(demoFields: Array<StructFieldInfoReturn>): ShowStructTemplateResponse {
        this['demoFields'] = demoFields;
        return this;
    }
    public withTagFields(tagFields: Array<TagFieldsInfo>): ShowStructTemplateResponse {
        this['tagFields'] = tagFields;
        return this;
    }
    public withDemoLog(demoLog: string): ShowStructTemplateResponse {
        this['demoLog'] = demoLog;
        return this;
    }
    public withDemoLabel(demoLabel: string): ShowStructTemplateResponse {
        this['demoLabel'] = demoLabel;
        return this;
    }
    public withId(id: string): ShowStructTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withLogGroupId(logGroupId: string): ShowStructTemplateResponse {
        this['logGroupId'] = logGroupId;
        return this;
    }
    public withRule(rule: ShowStructTemplateRule): ShowStructTemplateResponse {
        this['rule'] = rule;
        return this;
    }
    public withClusterInfo(clusterInfo: ShowStructTemplateclusterInfo): ShowStructTemplateResponse {
        this['cluster_info'] = clusterInfo;
        return this;
    }
    public set clusterInfo(clusterInfo: ShowStructTemplateclusterInfo  | undefined) {
        this['cluster_info'] = clusterInfo;
    }
    public get clusterInfo(): ShowStructTemplateclusterInfo | undefined {
        return this['cluster_info'];
    }
    public withLogStreamId(logStreamId: string): ShowStructTemplateResponse {
        this['logStreamId'] = logStreamId;
        return this;
    }
    public withProjectId(projectId: string): ShowStructTemplateResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withTemplateName(templateName: string): ShowStructTemplateResponse {
        this['templateName'] = templateName;
        return this;
    }
    public withRegex(regex: string): ShowStructTemplateResponse {
        this['regex'] = regex;
        return this;
    }
}