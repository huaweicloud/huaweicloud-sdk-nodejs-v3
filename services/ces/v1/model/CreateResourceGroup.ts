import { MetricsDimension } from './MetricsDimension';


export class CreateResourceGroup {
    public namespace?: string;
    public dimensions?: Array<MetricsDimension>;
    private 'relation_id'?: string;
    public constructor(namespace?: string, dimensions?: Array<MetricsDimension>) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): CreateResourceGroup {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<MetricsDimension>): CreateResourceGroup {
        this['dimensions'] = dimensions;
        return this;
    }
    public withRelationId(relationId: string): CreateResourceGroup {
        this['relation_id'] = relationId;
        return this;
    }
    public set relationId(relationId: string  | undefined) {
        this['relation_id'] = relationId;
    }
    public get relationId(): string | undefined {
        return this['relation_id'];
    }
}