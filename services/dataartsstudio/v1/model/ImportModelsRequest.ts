import { ImportModelsRequestBody } from './ImportModelsRequestBody';


export class ImportModelsRequest {
    public workspace?: string;
    private 'action-id'?: ImportModelsRequestActionIdEnum | string;
    private 'model_id'?: string;
    private 'directory_id'?: string;
    private 'skip-exist'?: boolean;
    public body?: ImportModelsRequestBody;
    public constructor(workspace?: string, actionId?: string) { 
        this['workspace'] = workspace;
        this['action-id'] = actionId;
    }
    public withWorkspace(workspace: string): ImportModelsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withActionId(actionId: ImportModelsRequestActionIdEnum | string): ImportModelsRequest {
        this['action-id'] = actionId;
        return this;
    }
    public set actionId(actionId: ImportModelsRequestActionIdEnum | string  | undefined) {
        this['action-id'] = actionId;
    }
    public get actionId(): ImportModelsRequestActionIdEnum | string | undefined {
        return this['action-id'];
    }
    public withModelId(modelId: string): ImportModelsRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withDirectoryId(directoryId: string): ImportModelsRequest {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: string  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): string | undefined {
        return this['directory_id'];
    }
    public withSkipExist(skipExist: boolean): ImportModelsRequest {
        this['skip-exist'] = skipExist;
        return this;
    }
    public set skipExist(skipExist: boolean  | undefined) {
        this['skip-exist'] = skipExist;
    }
    public get skipExist(): boolean | undefined {
        return this['skip-exist'];
    }
    public withBody(body: ImportModelsRequestBody): ImportModelsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportModelsRequestActionIdEnum {
    IMPORT_RELATION = 'import_relation',
    IMPORT_DIMENSION = 'import_dimension',
    IMPORT_CODETABLE = 'import_codetable',
    IMPORT_DATASTANDARD = 'import_datastandard',
    IMPORT_BIZMETRIC = 'import_bizmetric',
    IMPORT_BIZCATALOG = 'import_bizcatalog',
    IMPORT_ATOMIC = 'import_atomic',
    IMPORT_DERIVATIVE = 'import_derivative',
    IMPORT_COMPOUND = 'import_compound',
    IMPORT_AGGREGATION = 'import_aggregation'
}
