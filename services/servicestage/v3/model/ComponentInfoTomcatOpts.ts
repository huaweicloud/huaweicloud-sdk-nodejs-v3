

export class ComponentInfoTomcatOpts {
    private 'server_xml'?: string;
    public constructor() { 
    }
    public withServerXml(serverXml: string): ComponentInfoTomcatOpts {
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