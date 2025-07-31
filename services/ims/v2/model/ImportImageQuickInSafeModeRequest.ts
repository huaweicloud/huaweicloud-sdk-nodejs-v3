import { QuickImportImageByFileRequestBody } from './QuickImportImageByFileRequestBody';


export class ImportImageQuickInSafeModeRequest {
    public body?: QuickImportImageByFileRequestBody;
    public constructor() { 
    }
    public withBody(body: QuickImportImageByFileRequestBody): ImportImageQuickInSafeModeRequest {
        this['body'] = body;
        return this;
    }
}