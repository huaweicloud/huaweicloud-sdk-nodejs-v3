import { ResourceTag } from './ResourceTag';


export class DeleteTagsDto {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): DeleteTagsDto {
        this['tags'] = tags;
        return this;
    }
}