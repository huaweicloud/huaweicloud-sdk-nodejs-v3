

export class SearchQueryResult {
    public timestamp?: string;
    private 'data_source'?: object;
    public constructor(timestamp?: string, dataSource?: object) { 
        this['timestamp'] = timestamp;
        this['data_source'] = dataSource;
    }
    public withTimestamp(timestamp: string): SearchQueryResult {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDataSource(dataSource: object): SearchQueryResult {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: object  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): object | undefined {
        return this['data_source'];
    }
}