import { PredefineTagRequest } from './PredefineTagRequest';


export class ModifyPrefineTag {
    private 'new_tag'?: PredefineTagRequest;
    private 'old_tag'?: PredefineTagRequest;
    public constructor(newTag?: PredefineTagRequest, oldTag?: PredefineTagRequest) { 
        this['new_tag'] = newTag;
        this['old_tag'] = oldTag;
    }
    public withNewTag(newTag: PredefineTagRequest): ModifyPrefineTag {
        this['new_tag'] = newTag;
        return this;
    }
    public set newTag(newTag: PredefineTagRequest  | undefined) {
        this['new_tag'] = newTag;
    }
    public get newTag(): PredefineTagRequest | undefined {
        return this['new_tag'];
    }
    public withOldTag(oldTag: PredefineTagRequest): ModifyPrefineTag {
        this['old_tag'] = oldTag;
        return this;
    }
    public set oldTag(oldTag: PredefineTagRequest  | undefined) {
        this['old_tag'] = oldTag;
    }
    public get oldTag(): PredefineTagRequest | undefined {
        return this['old_tag'];
    }
}