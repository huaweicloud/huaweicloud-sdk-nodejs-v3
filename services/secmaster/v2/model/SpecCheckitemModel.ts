

export class SpecCheckitemModel {
    private 'checkitem_uuid'?: string;
    private 'create_time'?: string;
    public language?: string;
    public name?: string;
    private 'remove_time'?: string;
    private 'specification_uuid'?: string;
    public uuid?: string;
    public constructor() { 
    }
    public withCheckitemUuid(checkitemUuid: string): SpecCheckitemModel {
        this['checkitem_uuid'] = checkitemUuid;
        return this;
    }
    public set checkitemUuid(checkitemUuid: string  | undefined) {
        this['checkitem_uuid'] = checkitemUuid;
    }
    public get checkitemUuid(): string | undefined {
        return this['checkitem_uuid'];
    }
    public withCreateTime(createTime: string): SpecCheckitemModel {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLanguage(language: string): SpecCheckitemModel {
        this['language'] = language;
        return this;
    }
    public withName(name: string): SpecCheckitemModel {
        this['name'] = name;
        return this;
    }
    public withRemoveTime(removeTime: string): SpecCheckitemModel {
        this['remove_time'] = removeTime;
        return this;
    }
    public set removeTime(removeTime: string  | undefined) {
        this['remove_time'] = removeTime;
    }
    public get removeTime(): string | undefined {
        return this['remove_time'];
    }
    public withSpecificationUuid(specificationUuid: string): SpecCheckitemModel {
        this['specification_uuid'] = specificationUuid;
        return this;
    }
    public set specificationUuid(specificationUuid: string  | undefined) {
        this['specification_uuid'] = specificationUuid;
    }
    public get specificationUuid(): string | undefined {
        return this['specification_uuid'];
    }
    public withUuid(uuid: string): SpecCheckitemModel {
        this['uuid'] = uuid;
        return this;
    }
}