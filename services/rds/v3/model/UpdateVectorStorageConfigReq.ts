

export class UpdateVectorStorageConfigReq {
    private 'vector_storage_switch'?: boolean;
    public constructor(vectorStorageSwitch?: boolean) { 
        this['vector_storage_switch'] = vectorStorageSwitch;
    }
    public withVectorStorageSwitch(vectorStorageSwitch: boolean): UpdateVectorStorageConfigReq {
        this['vector_storage_switch'] = vectorStorageSwitch;
        return this;
    }
    public set vectorStorageSwitch(vectorStorageSwitch: boolean  | undefined) {
        this['vector_storage_switch'] = vectorStorageSwitch;
    }
    public get vectorStorageSwitch(): boolean | undefined {
        return this['vector_storage_switch'];
    }
}