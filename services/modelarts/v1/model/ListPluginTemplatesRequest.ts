

export class ListPluginTemplatesRequest {
    public templateName?: string;
    public poolName?: string;
    public constructor() { 
    }
    public withTemplateName(templateName: string): ListPluginTemplatesRequest {
        this['templateName'] = templateName;
        return this;
    }
    public withPoolName(poolName: string): ListPluginTemplatesRequest {
        this['poolName'] = poolName;
        return this;
    }
}