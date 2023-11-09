

export class ComponentModifyTomcatOpts {
    private 'server_xml'?: string;
    public constructor(serverXml?: string) { 
        this['server_xml'] = serverXml;
    }
    public withServerXml(serverXml: string): ComponentModifyTomcatOpts {
        this['server_xml'] = serverXml;
        return this;
    }
    public set serverXml(serverXml: string  | undefined) {
        this['server_xml'] = serverXml;
    }
    public get serverXml(): string | undefined {
        return this['server_xml'];
    }
}