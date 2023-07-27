import { LocalName } from './LocalName';


export class AvailableZone {
    public name?: string;
    public id?: string;
    public code?: string;
    public port?: string;
    private 'local_name'?: LocalName;
    public specs?: { [key: string]: boolean; };
    public constructor() { 
    }
    public withName(name: string): AvailableZone {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AvailableZone {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): AvailableZone {
        this['code'] = code;
        return this;
    }
    public withPort(port: string): AvailableZone {
        this['port'] = port;
        return this;
    }
    public withLocalName(localName: LocalName): AvailableZone {
        this['local_name'] = localName;
        return this;
    }
    public set localName(localName: LocalName  | undefined) {
        this['local_name'] = localName;
    }
    public get localName(): LocalName | undefined {
        return this['local_name'];
    }
    public withSpecs(specs: { [key: string]: boolean; }): AvailableZone {
        this['specs'] = specs;
        return this;
    }
}