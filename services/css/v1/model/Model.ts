

export class Model {
    public id?: string;
    public name?: string;
    private 'datastore_type'?: string;
    private 'datastore_version'?: string;
    private 'is_text_model'?: string;
    private 'model_version_id'?: string;
    public desc?: string;
    public language?: string;
    private 'arch_type'?: string;
    public constructor() { 
    }
    public withId(id: string): Model {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Model {
        this['name'] = name;
        return this;
    }
    public withDatastoreType(datastoreType: string): Model {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withDatastoreVersion(datastoreVersion: string): Model {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withIsTextModel(isTextModel: string): Model {
        this['is_text_model'] = isTextModel;
        return this;
    }
    public set isTextModel(isTextModel: string  | undefined) {
        this['is_text_model'] = isTextModel;
    }
    public get isTextModel(): string | undefined {
        return this['is_text_model'];
    }
    public withModelVersionId(modelVersionId: string): Model {
        this['model_version_id'] = modelVersionId;
        return this;
    }
    public set modelVersionId(modelVersionId: string  | undefined) {
        this['model_version_id'] = modelVersionId;
    }
    public get modelVersionId(): string | undefined {
        return this['model_version_id'];
    }
    public withDesc(desc: string): Model {
        this['desc'] = desc;
        return this;
    }
    public withLanguage(language: string): Model {
        this['language'] = language;
        return this;
    }
    public withArchType(archType: string): Model {
        this['arch_type'] = archType;
        return this;
    }
    public set archType(archType: string  | undefined) {
        this['arch_type'] = archType;
    }
    public get archType(): string | undefined {
        return this['arch_type'];
    }
}