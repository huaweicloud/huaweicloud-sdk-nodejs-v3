import { TagsBody } from './TagsBody';


export class CreateTagsReqbody {
    public action: string;
    private 'is_open': boolean | undefined;
    public tags: Array<TagsBody>;
    public constructor(action?: any, isOpen?: any, tags?: any) { 
        this['action'] = action;
        this['is_open'] = isOpen;
        this['tags'] = tags;
    }
    public withAction(action: string): CreateTagsReqbody {
        this['action'] = action;
        return this;
    }
    public withIsOpen(isOpen: boolean): CreateTagsReqbody {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen() {
        return this['is_open'];
    }
    public withTags(tags: Array<TagsBody>): CreateTagsReqbody {
        this['tags'] = tags;
        return this;
    }
}