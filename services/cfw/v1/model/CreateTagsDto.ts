import { CreateTag } from './CreateTag';


export class CreateTagsDto {
    public tags?: Array<CreateTag>;
    public constructor() { 
    }
    public withTags(tags: Array<CreateTag>): CreateTagsDto {
        this['tags'] = tags;
        return this;
    }
}