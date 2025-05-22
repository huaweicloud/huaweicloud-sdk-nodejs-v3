import { NodeTypeDatastoresAttachments } from './NodeTypeDatastoresAttachments';


export class NodeTypeDatastores {
    public version?: string;
    public attachments?: NodeTypeDatastoresAttachments;
    public role?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): NodeTypeDatastores {
        this['version'] = version;
        return this;
    }
    public withAttachments(attachments: NodeTypeDatastoresAttachments): NodeTypeDatastores {
        this['attachments'] = attachments;
        return this;
    }
    public withRole(role: string): NodeTypeDatastores {
        this['role'] = role;
        return this;
    }
}