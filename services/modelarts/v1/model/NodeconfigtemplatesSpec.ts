import { NodeconfigTemplateItem } from './NodeconfigTemplateItem';


export class NodeconfigtemplatesSpec {
    public templates?: Array<NodeconfigTemplateItem>;
    public constructor() { 
    }
    public withTemplates(templates: Array<NodeconfigTemplateItem>): NodeconfigtemplatesSpec {
        this['templates'] = templates;
        return this;
    }
}