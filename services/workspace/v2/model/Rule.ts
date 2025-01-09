import { PathRule } from './PathRule';
import { ProductRule } from './ProductRule';
import { RuleScope } from './RuleScope';


export class Rule {
    public scope?: RuleScope;
    private 'product_rule'?: ProductRule;
    private 'path_rule'?: PathRule;
    public constructor(scope?: RuleScope) { 
        this['scope'] = scope;
    }
    public withScope(scope: RuleScope): Rule {
        this['scope'] = scope;
        return this;
    }
    public withProductRule(productRule: ProductRule): Rule {
        this['product_rule'] = productRule;
        return this;
    }
    public set productRule(productRule: ProductRule  | undefined) {
        this['product_rule'] = productRule;
    }
    public get productRule(): ProductRule | undefined {
        return this['product_rule'];
    }
    public withPathRule(pathRule: PathRule): Rule {
        this['path_rule'] = pathRule;
        return this;
    }
    public set pathRule(pathRule: PathRule  | undefined) {
        this['path_rule'] = pathRule;
    }
    public get pathRule(): PathRule | undefined {
        return this['path_rule'];
    }
}