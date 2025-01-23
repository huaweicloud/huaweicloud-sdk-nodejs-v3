

export class ListFlavorsRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    public name?: Array<string>;
    public type?: Array<string>;
    public shared?: boolean;
    private 'public_border_group'?: Array<string>;
    public category?: Array<number>;
    private 'list_all'?: boolean;
    private 'flavor_sold_out'?: boolean;
    public constructor() { 
    }
    public withMarker(marker: string): ListFlavorsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListFlavorsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListFlavorsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListFlavorsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): ListFlavorsRequest {
        this['type'] = type;
        return this;
    }
    public withShared(shared: boolean): ListFlavorsRequest {
        this['shared'] = shared;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: Array<string>): ListFlavorsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: Array<string>  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): Array<string> | undefined {
        return this['public_border_group'];
    }
    public withCategory(category: Array<number>): ListFlavorsRequest {
        this['category'] = category;
        return this;
    }
    public withListAll(listAll: boolean): ListFlavorsRequest {
        this['list_all'] = listAll;
        return this;
    }
    public set listAll(listAll: boolean  | undefined) {
        this['list_all'] = listAll;
    }
    public get listAll(): boolean | undefined {
        return this['list_all'];
    }
    public withFlavorSoldOut(flavorSoldOut: boolean): ListFlavorsRequest {
        this['flavor_sold_out'] = flavorSoldOut;
        return this;
    }
    public set flavorSoldOut(flavorSoldOut: boolean  | undefined) {
        this['flavor_sold_out'] = flavorSoldOut;
    }
    public get flavorSoldOut(): boolean | undefined {
        return this['flavor_sold_out'];
    }
}