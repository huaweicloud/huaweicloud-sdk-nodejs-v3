
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterProtectPolicyTemplateResponse extends SdkResponse {
    public id?: string;
    private 'template_name'?: string;
    private 'template_type'?: string;
    public description?: string;
    private 'target_kind'?: string;
    public tag?: string;
    public level?: string;
    private 'constraint_template'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowClusterProtectPolicyTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withTemplateName(templateName: string): ShowClusterProtectPolicyTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): ShowClusterProtectPolicyTemplateResponse {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withDescription(description: string): ShowClusterProtectPolicyTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withTargetKind(targetKind: string): ShowClusterProtectPolicyTemplateResponse {
        this['target_kind'] = targetKind;
        return this;
    }
    public set targetKind(targetKind: string  | undefined) {
        this['target_kind'] = targetKind;
    }
    public get targetKind(): string | undefined {
        return this['target_kind'];
    }
    public withTag(tag: string): ShowClusterProtectPolicyTemplateResponse {
        this['tag'] = tag;
        return this;
    }
    public withLevel(level: string): ShowClusterProtectPolicyTemplateResponse {
        this['level'] = level;
        return this;
    }
    public withConstraintTemplate(constraintTemplate: string): ShowClusterProtectPolicyTemplateResponse {
        this['constraint_template'] = constraintTemplate;
        return this;
    }
    public set constraintTemplate(constraintTemplate: string  | undefined) {
        this['constraint_template'] = constraintTemplate;
    }
    public get constraintTemplate(): string | undefined {
        return this['constraint_template'];
    }
}