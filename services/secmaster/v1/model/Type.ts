import { TypeProperties } from './TypeProperties';


export class Type {
    public business?: string;
    public category?: string;
    public classifier?: string;
    private 'tech_domain'?: string;
    public properties?: TypeProperties;
    public constructor(business?: string) { 
        this['business'] = business;
    }
    public withBusiness(business: string): Type {
        this['business'] = business;
        return this;
    }
    public withCategory(category: string): Type {
        this['category'] = category;
        return this;
    }
    public withClassifier(classifier: string): Type {
        this['classifier'] = classifier;
        return this;
    }
    public withTechDomain(techDomain: string): Type {
        this['tech_domain'] = techDomain;
        return this;
    }
    public set techDomain(techDomain: string  | undefined) {
        this['tech_domain'] = techDomain;
    }
    public get techDomain(): string | undefined {
        return this['tech_domain'];
    }
    public withProperties(properties: TypeProperties): Type {
        this['properties'] = properties;
        return this;
    }
}