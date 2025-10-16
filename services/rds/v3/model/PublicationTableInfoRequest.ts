import { ArticlePropertiesRequest } from './ArticlePropertiesRequest';
import { PublicationTableFilterInfoRequest } from './PublicationTableFilterInfoRequest';


export class PublicationTableInfoRequest {
    private 'table_name'?: string;
    public schema?: string;
    public columns?: Array<string>;
    private 'primary_key'?: Array<string>;
    private 'filter_statement'?: string;
    public filter?: PublicationTableFilterInfoRequest;
    private 'article_properties'?: ArticlePropertiesRequest;
    public constructor(tableName?: string) { 
        this['table_name'] = tableName;
    }
    public withTableName(tableName: string): PublicationTableInfoRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withSchema(schema: string): PublicationTableInfoRequest {
        this['schema'] = schema;
        return this;
    }
    public withColumns(columns: Array<string>): PublicationTableInfoRequest {
        this['columns'] = columns;
        return this;
    }
    public withPrimaryKey(primaryKey: Array<string>): PublicationTableInfoRequest {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: Array<string>  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): Array<string> | undefined {
        return this['primary_key'];
    }
    public withFilterStatement(filterStatement: string): PublicationTableInfoRequest {
        this['filter_statement'] = filterStatement;
        return this;
    }
    public set filterStatement(filterStatement: string  | undefined) {
        this['filter_statement'] = filterStatement;
    }
    public get filterStatement(): string | undefined {
        return this['filter_statement'];
    }
    public withFilter(filter: PublicationTableFilterInfoRequest): PublicationTableInfoRequest {
        this['filter'] = filter;
        return this;
    }
    public withArticleProperties(articleProperties: ArticlePropertiesRequest): PublicationTableInfoRequest {
        this['article_properties'] = articleProperties;
        return this;
    }
    public set articleProperties(articleProperties: ArticlePropertiesRequest  | undefined) {
        this['article_properties'] = articleProperties;
    }
    public get articleProperties(): ArticlePropertiesRequest | undefined {
        return this['article_properties'];
    }
}