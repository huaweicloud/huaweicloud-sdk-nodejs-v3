import { ConnectionModuleFieldShowVo } from './ConnectionModuleFieldShowVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCollectorConnectionResponse extends SdkResponse {
    private 'connection_id'?: string;
    public description?: string;
    public fields?: Array<ConnectionModuleFieldShowVo>;
    private 'module_id'?: string;
    public name?: string;
    private 'template_id'?: string;
    public title?: string;
    public constructor() { 
        super();
    }
    public withConnectionId(connectionId: string): ShowCollectorConnectionResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDescription(description: string): ShowCollectorConnectionResponse {
        this['description'] = description;
        return this;
    }
    public withFields(fields: Array<ConnectionModuleFieldShowVo>): ShowCollectorConnectionResponse {
        this['fields'] = fields;
        return this;
    }
    public withModuleId(moduleId: string): ShowCollectorConnectionResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): ShowCollectorConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): ShowCollectorConnectionResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTitle(title: string): ShowCollectorConnectionResponse {
        this['title'] = title;
        return this;
    }
}