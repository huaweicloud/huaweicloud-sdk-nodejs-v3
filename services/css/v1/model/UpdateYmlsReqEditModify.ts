

export class UpdateYmlsReqEditModify {
    private 'elasticsearch.yml'?: object;
    private 'kibana.yml'?: object;
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
    public withKibanaYml(kibanaYml: object): UpdateYmlsReqEditModify {
        this['kibana.yml'] = kibanaYml;
        return this;
    }
    public set kibanaYml(kibanaYml: object  | undefined) {
        this['kibana.yml'] = kibanaYml;
    }
    public get kibanaYml(): object | undefined {
        return this['kibana.yml'];
    }
}