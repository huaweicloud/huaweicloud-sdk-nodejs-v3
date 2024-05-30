import { AddResourceTagsRequestBodyTag } from './AddResourceTagsRequestBodyTag';


export class AddResourceTagsRequestBody {
    public tag?: AddResourceTagsRequestBodyTag;
    public constructor(tag?: AddResourceTagsRequestBodyTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: AddResourceTagsRequestBodyTag): AddResourceTagsRequestBody {
        this['tag'] = tag;
        return this;
    }
}