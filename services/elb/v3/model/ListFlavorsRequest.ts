

export class ListFlavorsRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    public type?: Array<string>;
    public shared?: boolean;
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
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
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
}