

export class AopworkflowInstanceDetailWorkflow {
    public id?: string;
    public name?: string;
    private 'name_en'?: string;
    public version?: string;
    private 'version_id'?: string;
    public constructor() { 
    }
    public withId(id: string): AopworkflowInstanceDetailWorkflow {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AopworkflowInstanceDetailWorkflow {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): AopworkflowInstanceDetailWorkflow {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withVersion(version: string): AopworkflowInstanceDetailWorkflow {
        this['version'] = version;
        return this;
    }
    public withVersionId(versionId: string): AopworkflowInstanceDetailWorkflow {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}