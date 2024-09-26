import { CentralNetworkPolicyDocument } from './CentralNetworkPolicyDocument';
import { Description } from './Description';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { Name } from './Name';
import { NonRequiredAutoAssociateRouteEnabled } from './NonRequiredAutoAssociateRouteEnabled';
import { NonRequiredAutoPropagateRouteEnabled } from './NonRequiredAutoPropagateRouteEnabled';
import { Tag } from './Tag';
import { Tags } from './Tags';


export class CreateCentralNetwork {
    public name?: string;
    public description?: string;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'policy_document'?: CentralNetworkPolicyDocument;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateCentralNetwork {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateCentralNetwork {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateCentralNetwork {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCentralNetwork {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyDocument(policyDocument: CentralNetworkPolicyDocument): CreateCentralNetwork {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: CentralNetworkPolicyDocument  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): CentralNetworkPolicyDocument | undefined {
        return this['policy_document'];
    }
}