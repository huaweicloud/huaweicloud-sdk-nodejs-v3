import { MultivaluedTag } from './MultivaluedTag';


export class ListBandwidthPackagesByTagsRequestBody {
    public tags?: Array<MultivaluedTag>;
    public constructor(tags?: Array<MultivaluedTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<MultivaluedTag>): ListBandwidthPackagesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}