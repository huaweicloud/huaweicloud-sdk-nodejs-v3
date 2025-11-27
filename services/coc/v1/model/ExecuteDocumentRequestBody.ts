import { ExecuteDocumentRequestBodyParameters } from './ExecuteDocumentRequestBodyParameters';
import { ExecuteDocumentRequestBodySysTags } from './ExecuteDocumentRequestBodySysTags';
import { ExecuteDocumentRequestBodyTargets } from './ExecuteDocumentRequestBodyTargets';


export class ExecuteDocumentRequestBody {
    public version?: string;
    public parameters?: Array<ExecuteDocumentRequestBodyParameters>;
    private 'sys_tags'?: Array<ExecuteDocumentRequestBodySysTags>;
    private 'target_parameter_name'?: string;
    public targets?: Array<ExecuteDocumentRequestBodyTargets>;
    private 'document_type'?: ExecuteDocumentRequestBodyDocumentTypeEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withVersion(version: string): ExecuteDocumentRequestBody {
        this['version'] = version;
        return this;
    }
    public withParameters(parameters: Array<ExecuteDocumentRequestBodyParameters>): ExecuteDocumentRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withSysTags(sysTags: Array<ExecuteDocumentRequestBodySysTags>): ExecuteDocumentRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ExecuteDocumentRequestBodySysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ExecuteDocumentRequestBodySysTags> | undefined {
        return this['sys_tags'];
    }
    public withTargetParameterName(targetParameterName: string): ExecuteDocumentRequestBody {
        this['target_parameter_name'] = targetParameterName;
        return this;
    }
    public set targetParameterName(targetParameterName: string  | undefined) {
        this['target_parameter_name'] = targetParameterName;
    }
    public get targetParameterName(): string | undefined {
        return this['target_parameter_name'];
    }
    public withTargets(targets: Array<ExecuteDocumentRequestBodyTargets>): ExecuteDocumentRequestBody {
        this['targets'] = targets;
        return this;
    }
    public withDocumentType(documentType: ExecuteDocumentRequestBodyDocumentTypeEnum | string): ExecuteDocumentRequestBody {
        this['document_type'] = documentType;
        return this;
    }
    public set documentType(documentType: ExecuteDocumentRequestBodyDocumentTypeEnum | string  | undefined) {
        this['document_type'] = documentType;
    }
    public get documentType(): ExecuteDocumentRequestBodyDocumentTypeEnum | string | undefined {
        return this['document_type'];
    }
    public withDescription(description: string): ExecuteDocumentRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteDocumentRequestBodyDocumentTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
