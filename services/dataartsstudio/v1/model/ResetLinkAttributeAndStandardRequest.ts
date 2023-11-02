import { LinkAttributeAndElementVO } from './LinkAttributeAndElementVO';


export class ResetLinkAttributeAndStandardRequest {
    public workspace?: string;
    public body?: LinkAttributeAndElementVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ResetLinkAttributeAndStandardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: LinkAttributeAndElementVO): ResetLinkAttributeAndStandardRequest {
        this['body'] = body;
        return this;
    }
}