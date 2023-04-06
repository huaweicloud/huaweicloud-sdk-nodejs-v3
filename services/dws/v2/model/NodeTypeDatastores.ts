import { NodeTypeDatastoresAttachments } from './NodeTypeDatastoresAttachments';


export class NodeTypeDatastores {
    public version: string;
    public attachments: NodeTypeDatastoresAttachments;
    public constructor(version?: any, attachments?: any) { 
        this['version'] = version;
        this['attachments'] = attachments;
    }
    public withVersion(version: string): NodeTypeDatastores {
        this['version'] = version;
        return this;
    }
    public withAttachments(attachments: NodeTypeDatastoresAttachments): NodeTypeDatastores {
        this['attachments'] = attachments;
        return this;
    }
}