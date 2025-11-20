import { NodeTemplateInHyperNode } from './NodeTemplateInHyperNode';


export class HyperNodeSpec {
    public flavor?: string;
    public nodepoolID?: string;
    public nodeTemplate?: Array<NodeTemplateInHyperNode>;
    public chargeMode?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): HyperNodeSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withNodepoolID(nodepoolID: string): HyperNodeSpec {
        this['nodepoolID'] = nodepoolID;
        return this;
    }
    public withNodeTemplate(nodeTemplate: Array<NodeTemplateInHyperNode>): HyperNodeSpec {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
    public withChargeMode(chargeMode: string): HyperNodeSpec {
        this['chargeMode'] = chargeMode;
        return this;
    }
}