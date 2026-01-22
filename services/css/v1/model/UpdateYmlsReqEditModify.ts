

export class UpdateYmlsReqEditModify {
    private 'elasticsearch.yml'?: object;
    public constructor() { 
    }
    public withElasticsearchYml(elasticsearchYml: object): UpdateYmlsReqEditModify {
        this['elasticsearch.yml'] = elasticsearchYml;
        return this;
    }
    public set elasticsearchYml(elasticsearchYml: object  | undefined) {
        this['elasticsearch.yml'] = elasticsearchYml;
    }
    public get elasticsearchYml(): object | undefined {
        return this['elasticsearch.yml'];
    }
}