import { CreateSiteInformation } from './CreateSiteInformation';
import { CreateSiteInformationPair } from './CreateSiteInformationPair';
import { Description } from './Description';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { Name } from './Name';
import { Tag } from './Tag';
import { Tags } from './Tags';


export class CreateP2PSiteNetwork {
    public name?: string;
    public description?: string;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public sites?: Array<CreateSiteInformation>;
    public constructor(name?: string, sites?: Array<CreateSiteInformation>) { 
        this['name'] = name;
        this['sites'] = sites;
    }
    public withName(name: string): CreateP2PSiteNetwork {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateP2PSiteNetwork {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateP2PSiteNetwork {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateP2PSiteNetwork {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSites(sites: Array<CreateSiteInformation>): CreateP2PSiteNetwork {
        this['sites'] = sites;
        return this;
    }
}