import { Name } from './Name';


export class Area {
    public name?: string;
    public id?: string;
    private 'en_name'?: string;
    private 'es_name'?: string;
    private 'pt_name'?: string;
    public station?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): Area {
        this['name'] = name;
        return this;
    }
    public withId(id: string): Area {
        this['id'] = id;
        return this;
    }
    public withEnName(enName: string): Area {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withEsName(esName: string): Area {
        this['es_name'] = esName;
        return this;
    }
    public set esName(esName: string  | undefined) {
        this['es_name'] = esName;
    }
    public get esName(): string | undefined {
        return this['es_name'];
    }
    public withPtName(ptName: string): Area {
        this['pt_name'] = ptName;
        return this;
    }
    public set ptName(ptName: string  | undefined) {
        this['pt_name'] = ptName;
    }
    public get ptName(): string | undefined {
        return this['pt_name'];
    }
    public withStation(station: string): Area {
        this['station'] = station;
        return this;
    }
}