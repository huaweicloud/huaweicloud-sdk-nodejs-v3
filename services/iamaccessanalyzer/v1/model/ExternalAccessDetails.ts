import { FindingCondition } from './FindingCondition';
import { FindingPrincipal } from './FindingPrincipal';
import { FindingSourceType } from './FindingSourceType';


export class ExternalAccessDetails {
    public action?: Array<string>;
    public condition?: Array<FindingCondition>;
    private 'is_public'?: boolean;
    public principal?: FindingPrincipal;
    public sources?: Array<FindingSourceType>;
    public constructor(action?: Array<string>, condition?: Array<FindingCondition>, isPublic?: boolean, principal?: FindingPrincipal) { 
        this['action'] = action;
        this['condition'] = condition;
        this['is_public'] = isPublic;
        this['principal'] = principal;
    }
    public withAction(action: Array<string>): ExternalAccessDetails {
        this['action'] = action;
        return this;
    }
    public withCondition(condition: Array<FindingCondition>): ExternalAccessDetails {
        this['condition'] = condition;
        return this;
    }
    public withIsPublic(isPublic: boolean): ExternalAccessDetails {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withPrincipal(principal: FindingPrincipal): ExternalAccessDetails {
        this['principal'] = principal;
        return this;
    }
    public withSources(sources: Array<FindingSourceType>): ExternalAccessDetails {
        this['sources'] = sources;
        return this;
    }
}