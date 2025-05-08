import { ExecuteDocumentRequsetBodyParameters } from './ExecuteDocumentRequsetBodyParameters';
import { ExecuteDocumentRequsetBodySysTags } from './ExecuteDocumentRequsetBodySysTags';
import { ExecuteDocumentRequsetBodyTargets } from './ExecuteDocumentRequsetBodyTargets';


export class ExecuteDocumentRequsetBody {
    public version?: string;
    public parameters?: Array<ExecuteDocumentRequsetBodyParameters>;
    private 'sys_tags'?: Array<ExecuteDocumentRequsetBodySysTags>;
    private 'target_parameter_name'?: string;
    public targets?: Array<ExecuteDocumentRequsetBodyTargets>;
    private 'document_type'?: ExecuteDocumentRequsetBodyDocumentTypeEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withVersion(version: string): ExecuteDocumentRequsetBody {
        this['version'] = version;
        return this;
    }
    public withParameters(parameters: Array<ExecuteDocumentRequsetBodyParameters>): ExecuteDocumentRequsetBody {
        this['parameters'] = parameters;
        return this;
    }
    public withSysTags(sysTags: Array<ExecuteDocumentRequsetBodySysTags>): ExecuteDocumentRequsetBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ExecuteDocumentRequsetBodySysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ExecuteDocumentRequsetBodySysTags> | undefined {
        return this['sys_tags'];
    }
    public withTargetParameterName(targetParameterName: string): ExecuteDocumentRequsetBody {
        this['target_parameter_name'] = targetParameterName;
        return this;
    }
    public set targetParameterName(targetParameterName: string  | undefined) {
        this['target_parameter_name'] = targetParameterName;
    }
    public get targetParameterName(): string | undefined {
        return this['target_parameter_name'];
    }
    public withTargets(targets: Array<ExecuteDocumentRequsetBodyTargets>): ExecuteDocumentRequsetBody {
        this['targets'] = targets;
        return this;
    }
    public withDocumentType(documentType: ExecuteDocumentRequsetBodyDocumentTypeEnum | string): ExecuteDocumentRequsetBody {
        this['document_type'] = documentType;
        return this;
    }
    public set documentType(documentType: ExecuteDocumentRequsetBodyDocumentTypeEnum | string  | undefined) {
        this['document_type'] = documentType;
    }
    public get documentType(): ExecuteDocumentRequsetBodyDocumentTypeEnum | string | undefined {
        return this['document_type'];
    }
    public withDescription(description: string): ExecuteDocumentRequsetBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteDocumentRequsetBodyDocumentTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
