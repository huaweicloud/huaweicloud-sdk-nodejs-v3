import { TagsBody } from './TagsBody';


export class CreateTagsReqbody {
    public action?: CreateTagsReqbodyActionEnum | string;
    private 'is_open'?: boolean;
    public tags?: Array<TagsBody>;
    public constructor(action?: string, isOpen?: boolean, tags?: Array<TagsBody>) { 
        this['action'] = action;
        this['is_open'] = isOpen;
        this['tags'] = tags;
    }
    public withAction(action: CreateTagsReqbodyActionEnum | string): CreateTagsReqbody {
        this['action'] = action;
        return this;
    }
    public withIsOpen(isOpen: boolean): CreateTagsReqbody {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
    public withTags(tags: Array<TagsBody>): CreateTagsReqbody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTagsReqbodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
