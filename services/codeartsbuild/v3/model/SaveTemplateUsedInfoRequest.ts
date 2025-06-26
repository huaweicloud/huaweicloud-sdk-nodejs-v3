import { SaveTemplateUsedInfoRequestBody } from './SaveTemplateUsedInfoRequestBody';


export class SaveTemplateUsedInfoRequest {
    public body?: SaveTemplateUsedInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: SaveTemplateUsedInfoRequestBody): SaveTemplateUsedInfoRequest {
        this['body'] = body;
        return this;
    }
}