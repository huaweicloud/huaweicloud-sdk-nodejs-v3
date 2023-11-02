import { DataMapFilterCriteria } from './DataMapFilterCriteria';
import { Sort } from './Sort';


export class SearchParameter {
    public query?: string;
    public filter?: DataMapFilterCriteria;
    public facets?: Array<string>;
    public limit?: number;
    public offset?: number;
    private 'relationship_attributes'?: Array<string>;
    public sort?: Array<Sort>;
    public owner?: string;
    private 'query_privilege'?: boolean;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withQuery(query: string): SearchParameter {
        this['query'] = query;
        return this;
    }
    public withFilter(filter: DataMapFilterCriteria): SearchParameter {
        this['filter'] = filter;
        return this;
    }
    public withFacets(facets: Array<string>): SearchParameter {
        this['facets'] = facets;
        return this;
    }
    public withLimit(limit: number): SearchParameter {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchParameter {
        this['offset'] = offset;
        return this;
    }
    public withRelationshipAttributes(relationshipAttributes: Array<string>): SearchParameter {
        this['relationship_attributes'] = relationshipAttributes;
        return this;
    }
    public set relationshipAttributes(relationshipAttributes: Array<string>  | undefined) {
        this['relationship_attributes'] = relationshipAttributes;
    }
    public get relationshipAttributes(): Array<string> | undefined {
        return this['relationship_attributes'];
    }
    public withSort(sort: Array<Sort>): SearchParameter {
        this['sort'] = sort;
        return this;
    }
    public withOwner(owner: string): SearchParameter {
        this['owner'] = owner;
        return this;
    }
    public withQueryPrivilege(queryPrivilege: boolean): SearchParameter {
        this['query_privilege'] = queryPrivilege;
        return this;
    }
    public set queryPrivilege(queryPrivilege: boolean  | undefined) {
        this['query_privilege'] = queryPrivilege;
    }
    public get queryPrivilege(): boolean | undefined {
        return this['query_privilege'];
    }
}