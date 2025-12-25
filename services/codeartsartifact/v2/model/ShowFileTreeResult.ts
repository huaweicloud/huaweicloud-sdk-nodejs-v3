import { ShowFileTreeResultChildren } from './ShowFileTreeResultChildren';


export class ShowFileTreeResult {
    public uploadAccess?: string;
    public total?: string;
    public uri?: string;
    public created?: string;
    public children?: Array<ShowFileTreeResultChildren>;
    public constructor() { 
    }
    public withUploadAccess(uploadAccess: string): ShowFileTreeResult {
        this['uploadAccess'] = uploadAccess;
        return this;
    }
    public withTotal(total: string): ShowFileTreeResult {
        this['total'] = total;
        return this;
    }
    public withUri(uri: string): ShowFileTreeResult {
        this['uri'] = uri;
        return this;
    }
    public withCreated(created: string): ShowFileTreeResult {
        this['created'] = created;
        return this;
    }
    public withChildren(children: Array<ShowFileTreeResultChildren>): ShowFileTreeResult {
        this['children'] = children;
        return this;
    }
}