import { QuickImportImageByFileRequestBody } from './QuickImportImageByFileRequestBody';


export class ImportImageQuickRequest {
    public body?: QuickImportImageByFileRequestBody;
    public constructor() { 
    }
    public withBody(body: QuickImportImageByFileRequestBody): ImportImageQuickRequest {
        this['body'] = body;
        return this;
    }
}