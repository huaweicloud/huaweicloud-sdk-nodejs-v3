import { AgenciesPrimitiveTypeHolder } from './AgenciesPrimitiveTypeHolder';
import { Agency } from './Agency';
import { EnableAutoRollbackPrimitiveTypeHolder } from './EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './EnableDeletionProtectionPrimitiveTypeHolder';
import { StackDescriptionPrimitiveTypeHolder } from './StackDescriptionPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './StackNamePrimitiveTypeHolder';
import { TemplateBodyPrimitiveTypeHolder } from './TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './TemplateURIPrimitiveTypeHolder';
import { VarsBodyPrimitiveTypeHolder } from './VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './VarsStructurePrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './VarsURIPrimitiveTypeHolder';


export class CreateStackRequestBody {
    private 'stack_name'?: string;
    public agencies?: Array<Agency>;
    public description?: string;
    private 'enable_deletion_protection'?: boolean;
    private 'enable_auto_rollback'?: boolean;
    private 'template_body'?: string;
    private 'template_uri'?: string;
    private 'vars_body'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    private 'vars_uri'?: string;
    public constructor(stackName?: string) { 
        this['stack_name'] = stackName;
    }
    public withStackName(stackName: string): CreateStackRequestBody {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withAgencies(agencies: Array<Agency>): CreateStackRequestBody {
        this['agencies'] = agencies;
        return this;
    }
    public withDescription(description: string): CreateStackRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnableDeletionProtection(enableDeletionProtection: boolean): CreateStackRequestBody {
        this['enable_deletion_protection'] = enableDeletionProtection;
        return this;
    }
    public set enableDeletionProtection(enableDeletionProtection: boolean  | undefined) {
        this['enable_deletion_protection'] = enableDeletionProtection;
    }
    public get enableDeletionProtection(): boolean | undefined {
        return this['enable_deletion_protection'];
    }
    public withEnableAutoRollback(enableAutoRollback: boolean): CreateStackRequestBody {
        this['enable_auto_rollback'] = enableAutoRollback;
        return this;
    }
    public set enableAutoRollback(enableAutoRollback: boolean  | undefined) {
        this['enable_auto_rollback'] = enableAutoRollback;
    }
    public get enableAutoRollback(): boolean | undefined {
        return this['enable_auto_rollback'];
    }
    public withTemplateBody(templateBody: string): CreateStackRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): CreateStackRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
    public withVarsBody(varsBody: string): CreateStackRequestBody {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): CreateStackRequestBody {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
    public withVarsUri(varsUri: string): CreateStackRequestBody {
        this['vars_uri'] = varsUri;
        return this;
    }
    public set varsUri(varsUri: string  | undefined) {
        this['vars_uri'] = varsUri;
    }
    public get varsUri(): string | undefined {
        return this['vars_uri'];
    }
}