import { ExecutionPlanDescriptionPrimitiveTypeHolder } from './ExecutionPlanDescriptionPrimitiveTypeHolder';
import { ExecutionPlanNamePrimitiveTypeHolder } from './ExecutionPlanNamePrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';
import { TemplateBodyPrimitiveTypeHolder } from './TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './TemplateURIPrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './VarsStructurePrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './VarsURIPrimitiveTypeHolder';


export class CreateExecutionPlanRequestBody {
    private 'stack_id'?: string | undefined;
    private 'template_body'?: string | undefined;
    private 'template_uri'?: string | undefined;
    private 'execution_plan_name': string | undefined;
    public description?: string;
    private 'vars_structure'?: Array<VarsStructure> | undefined;
    private 'vars_body'?: string | undefined;
    private 'vars_uri'?: string | undefined;
    public constructor(executionPlanName?: any) { 
        this['execution_plan_name'] = executionPlanName;
    }
    public withStackId(stackId: string): CreateExecutionPlanRequestBody {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withTemplateBody(templateBody: string): CreateExecutionPlanRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody() {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): CreateExecutionPlanRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri() {
        return this['template_uri'];
    }
    public withExecutionPlanName(executionPlanName: string): CreateExecutionPlanRequestBody {
        this['execution_plan_name'] = executionPlanName;
        return this;
    }
    public set executionPlanName(executionPlanName: string | undefined) {
        this['execution_plan_name'] = executionPlanName;
    }
    public get executionPlanName() {
        return this['execution_plan_name'];
    }
    public withDescription(description: string): CreateExecutionPlanRequestBody {
        this['description'] = description;
        return this;
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): CreateExecutionPlanRequestBody {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure> | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure() {
        return this['vars_structure'];
    }
    public withVarsBody(varsBody: string): CreateExecutionPlanRequestBody {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody() {
        return this['vars_body'];
    }
    public withVarsUri(varsUri: string): CreateExecutionPlanRequestBody {
        this['vars_uri'] = varsUri;
        return this;
    }
    public set varsUri(varsUri: string | undefined) {
        this['vars_uri'] = varsUri;
    }
    public get varsUri() {
        return this['vars_uri'];
    }
}