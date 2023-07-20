

export class ResouceInfo {
    public name?: string;
    public description?: string;
    private 'home_link'?: string;
    private 'subscribe_link'?: string;
    private 'subscribe_guide'?: string;
    public type?: string;
    private 'reference_price'?: string;
    private 'price_details_link'?: string;
    public specifications?: object;
    public constructor() { 
    }
    public withName(name: string): ResouceInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ResouceInfo {
        this['description'] = description;
        return this;
    }
    public withHomeLink(homeLink: string): ResouceInfo {
        this['home_link'] = homeLink;
        return this;
    }
    public set homeLink(homeLink: string  | undefined) {
        this['home_link'] = homeLink;
    }
    public get homeLink(): string | undefined {
        return this['home_link'];
    }
    public withSubscribeLink(subscribeLink: string): ResouceInfo {
        this['subscribe_link'] = subscribeLink;
        return this;
    }
    public set subscribeLink(subscribeLink: string  | undefined) {
        this['subscribe_link'] = subscribeLink;
    }
    public get subscribeLink(): string | undefined {
        return this['subscribe_link'];
    }
    public withSubscribeGuide(subscribeGuide: string): ResouceInfo {
        this['subscribe_guide'] = subscribeGuide;
        return this;
    }
    public set subscribeGuide(subscribeGuide: string  | undefined) {
        this['subscribe_guide'] = subscribeGuide;
    }
    public get subscribeGuide(): string | undefined {
        return this['subscribe_guide'];
    }
    public withType(type: string): ResouceInfo {
        this['type'] = type;
        return this;
    }
    public withReferencePrice(referencePrice: string): ResouceInfo {
        this['reference_price'] = referencePrice;
        return this;
    }
    public set referencePrice(referencePrice: string  | undefined) {
        this['reference_price'] = referencePrice;
    }
    public get referencePrice(): string | undefined {
        return this['reference_price'];
    }
    public withPriceDetailsLink(priceDetailsLink: string): ResouceInfo {
        this['price_details_link'] = priceDetailsLink;
        return this;
    }
    public set priceDetailsLink(priceDetailsLink: string  | undefined) {
        this['price_details_link'] = priceDetailsLink;
    }
    public get priceDetailsLink(): string | undefined {
        return this['price_details_link'];
    }
    public withSpecifications(specifications: object): ResouceInfo {
        this['specifications'] = specifications;
        return this;
    }
}