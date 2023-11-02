import { CssIndex } from './CssIndex';
import { Database } from './Database';
import { DisStream } from './DisStream';
import { Namespace } from './Namespace';
import { ObsFolder } from './ObsFolder';


export class DataSource {
    private 'datasource_name'?: string;
    private 'datasource_type'?: string;
    private 'datasource_guid'?: string;
    private 'datasource_qualified_name'?: string;
    private 'obs_folder_count'?: number;
    private 'obs_file_count'?: number;
    private 'css_index_count'?: number;
    private 'css_index_field_count'?: number;
    private 'namespace_count'?: number;
    private 'ges_vertex_count'?: number;
    private 'ges_edge_count'?: number;
    private 'database_count'?: number;
    private 'stream_count'?: number;
    private 'table_count'?: number;
    private 'data_size'?: number;
    public databases?: Array<Database>;
    public folders?: Array<ObsFolder>;
    private 'css_indices'?: Array<CssIndex>;
    public namespaces?: Array<Namespace>;
    private 'dis_streams'?: Array<DisStream>;
    public constructor() { 
    }
    public withDatasourceName(datasourceName: string): DataSource {
        this['datasource_name'] = datasourceName;
        return this;
    }
    public set datasourceName(datasourceName: string  | undefined) {
        this['datasource_name'] = datasourceName;
    }
    public get datasourceName(): string | undefined {
        return this['datasource_name'];
    }
    public withDatasourceType(datasourceType: string): DataSource {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withDatasourceGuid(datasourceGuid: string): DataSource {
        this['datasource_guid'] = datasourceGuid;
        return this;
    }
    public set datasourceGuid(datasourceGuid: string  | undefined) {
        this['datasource_guid'] = datasourceGuid;
    }
    public get datasourceGuid(): string | undefined {
        return this['datasource_guid'];
    }
    public withDatasourceQualifiedName(datasourceQualifiedName: string): DataSource {
        this['datasource_qualified_name'] = datasourceQualifiedName;
        return this;
    }
    public set datasourceQualifiedName(datasourceQualifiedName: string  | undefined) {
        this['datasource_qualified_name'] = datasourceQualifiedName;
    }
    public get datasourceQualifiedName(): string | undefined {
        return this['datasource_qualified_name'];
    }
    public withObsFolderCount(obsFolderCount: number): DataSource {
        this['obs_folder_count'] = obsFolderCount;
        return this;
    }
    public set obsFolderCount(obsFolderCount: number  | undefined) {
        this['obs_folder_count'] = obsFolderCount;
    }
    public get obsFolderCount(): number | undefined {
        return this['obs_folder_count'];
    }
    public withObsFileCount(obsFileCount: number): DataSource {
        this['obs_file_count'] = obsFileCount;
        return this;
    }
    public set obsFileCount(obsFileCount: number  | undefined) {
        this['obs_file_count'] = obsFileCount;
    }
    public get obsFileCount(): number | undefined {
        return this['obs_file_count'];
    }
    public withCssIndexCount(cssIndexCount: number): DataSource {
        this['css_index_count'] = cssIndexCount;
        return this;
    }
    public set cssIndexCount(cssIndexCount: number  | undefined) {
        this['css_index_count'] = cssIndexCount;
    }
    public get cssIndexCount(): number | undefined {
        return this['css_index_count'];
    }
    public withCssIndexFieldCount(cssIndexFieldCount: number): DataSource {
        this['css_index_field_count'] = cssIndexFieldCount;
        return this;
    }
    public set cssIndexFieldCount(cssIndexFieldCount: number  | undefined) {
        this['css_index_field_count'] = cssIndexFieldCount;
    }
    public get cssIndexFieldCount(): number | undefined {
        return this['css_index_field_count'];
    }
    public withNamespaceCount(namespaceCount: number): DataSource {
        this['namespace_count'] = namespaceCount;
        return this;
    }
    public set namespaceCount(namespaceCount: number  | undefined) {
        this['namespace_count'] = namespaceCount;
    }
    public get namespaceCount(): number | undefined {
        return this['namespace_count'];
    }
    public withGesVertexCount(gesVertexCount: number): DataSource {
        this['ges_vertex_count'] = gesVertexCount;
        return this;
    }
    public set gesVertexCount(gesVertexCount: number  | undefined) {
        this['ges_vertex_count'] = gesVertexCount;
    }
    public get gesVertexCount(): number | undefined {
        return this['ges_vertex_count'];
    }
    public withGesEdgeCount(gesEdgeCount: number): DataSource {
        this['ges_edge_count'] = gesEdgeCount;
        return this;
    }
    public set gesEdgeCount(gesEdgeCount: number  | undefined) {
        this['ges_edge_count'] = gesEdgeCount;
    }
    public get gesEdgeCount(): number | undefined {
        return this['ges_edge_count'];
    }
    public withDatabaseCount(databaseCount: number): DataSource {
        this['database_count'] = databaseCount;
        return this;
    }
    public set databaseCount(databaseCount: number  | undefined) {
        this['database_count'] = databaseCount;
    }
    public get databaseCount(): number | undefined {
        return this['database_count'];
    }
    public withStreamCount(streamCount: number): DataSource {
        this['stream_count'] = streamCount;
        return this;
    }
    public set streamCount(streamCount: number  | undefined) {
        this['stream_count'] = streamCount;
    }
    public get streamCount(): number | undefined {
        return this['stream_count'];
    }
    public withTableCount(tableCount: number): DataSource {
        this['table_count'] = tableCount;
        return this;
    }
    public set tableCount(tableCount: number  | undefined) {
        this['table_count'] = tableCount;
    }
    public get tableCount(): number | undefined {
        return this['table_count'];
    }
    public withDataSize(dataSize: number): DataSource {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
    public withDatabases(databases: Array<Database>): DataSource {
        this['databases'] = databases;
        return this;
    }
    public withFolders(folders: Array<ObsFolder>): DataSource {
        this['folders'] = folders;
        return this;
    }
    public withCssIndices(cssIndices: Array<CssIndex>): DataSource {
        this['css_indices'] = cssIndices;
        return this;
    }
    public set cssIndices(cssIndices: Array<CssIndex>  | undefined) {
        this['css_indices'] = cssIndices;
    }
    public get cssIndices(): Array<CssIndex> | undefined {
        return this['css_indices'];
    }
    public withNamespaces(namespaces: Array<Namespace>): DataSource {
        this['namespaces'] = namespaces;
        return this;
    }
    public withDisStreams(disStreams: Array<DisStream>): DataSource {
        this['dis_streams'] = disStreams;
        return this;
    }
    public set disStreams(disStreams: Array<DisStream>  | undefined) {
        this['dis_streams'] = disStreams;
    }
    public get disStreams(): Array<DisStream> | undefined {
        return this['dis_streams'];
    }
}