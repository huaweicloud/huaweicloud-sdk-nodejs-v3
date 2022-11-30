import { ModifyPrefineTag } from './ModifyPrefineTag';


export class UpdatePredefineTagsRequest {
    public body?: ModifyPrefineTag;
    public constructor() { 
    }
    public withBody(body: ModifyPrefineTag): UpdatePredefineTagsRequest {
        this['body'] = body;
        return this;
    }
}